/* ==========================================================================
   ANWAR BENCHEIKH - MAIN ENTRY SCRIPT (GSAP, LENIS, RENDER ENGINE)
   ========================================================================== */

import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { initTheme } from './theme.js';
import { initI18n, getData } from './i18n.js';
import { initCustomCursor } from './cursor.js';
import { initModal, openProjectModal } from './modal.js';

gsap.registerPlugin(ScrollTrigger);

let lenis;

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Theme & Controls
  initTheme();
  initCustomCursor();
  initModal();

  // 2. Preloader Animation
  runPreloader(() => {
    // 3. Initialize Smooth Scroll
    initSmoothScroll();

    // 4. Render Dynamic Content
    renderAllSections();

    // 5. Initialize GSAP ScrollTrigger Animations
    initAnimations();

    // 6. Listen for i18n language changes
    initI18n(() => {
      renderAllSections();
      if (window.refreshCursorListeners) window.refreshCursorListeners();
    });
  });
});

/* Preloader Counter 0 -> 100% */
function runPreloader(onComplete) {
  const preloader = document.getElementById('preloader');
  const counterEl = document.getElementById('preloader-count');
  
  if (!preloader || !counterEl) {
    if (onComplete) onComplete();
    return;
  }

  let count = { val: 0 };
  gsap.to(count, {
    val: 100,
    duration: 1.5,
    ease: "power2.inOut",
    onUpdate: () => {
      counterEl.textContent = Math.floor(count.val).toString().padStart(2, '0');
    },
    onComplete: () => {
      preloader.classList.add('loaded');
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 600);
    }
  });
}

/* Lenis Smooth Scroll Setup */
function initSmoothScroll() {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.5,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
}

/* Dynamic Section Rendering */
function renderAllSections() {
  const data = getData();

  // HERO SECTION
  const heroSurname = document.getElementById('hero-surname');
  const heroFirstname = document.getElementById('hero-firstname');
  const heroSubtitle = document.getElementById('hero-subtitle');
  const heroStatusText = document.getElementById('hero-status-text');
  const heroCtaPrimary = document.getElementById('hero-cta-primary');
  const heroCtaContact = document.getElementById('hero-cta-contact');

  if (heroSurname) heroSurname.textContent = data.hero.surname;
  if (heroFirstname) heroFirstname.textContent = data.hero.firstname;
  if (heroSubtitle) heroSubtitle.textContent = data.hero.subtitle;
  if (heroStatusText) heroStatusText.textContent = data.hero.status;
  if (heroCtaPrimary) heroCtaPrimary.textContent = data.hero.ctaPrimary;
  if (heroCtaContact) heroCtaContact.textContent = data.hero.ctaContact;

  // ABOUT SECTION
  const aboutQuote = document.getElementById('about-quote');
  const aboutP1 = document.getElementById('about-p1');
  const aboutP2 = document.getElementById('about-p2');
  const aboutHighlightsContainer = document.getElementById('about-highlights');

  if (aboutQuote) aboutQuote.textContent = data.about.quote;
  if (aboutP1) aboutP1.textContent = data.about.p1;
  if (aboutP2) aboutP2.textContent = data.about.p2;

  if (aboutHighlightsContainer) {
    aboutHighlightsContainer.innerHTML = data.about.highlights.map(h => `
      <div class="highlight-card">
        <div class="highlight-icon">${h.icon}</div>
        <h4 class="highlight-title">${h.title}</h4>
        <p class="highlight-desc">${h.desc}</p>
      </div>
    `).join('');
  }

  // PROJECTS SECTION
  const projectsList = document.getElementById('projects-list');
  if (projectsList) {
    projectsList.innerHTML = data.projects.map(p => `
      <article class="project-card" data-project-id="${p.id}" tabindex="0" role="button" aria-label="Voir le projet ${p.title}">
        <div class="project-info">
          <div class="project-meta-top">
            <span class="project-index">${p.index}</span>
            <span class="project-category">${p.category}</span>
          </div>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-summary">${p.summary}</p>
          <div class="project-tech-tags">
            ${p.technologies.slice(0, 5).map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
          <div class="project-card-footer">
            <span>${data.hero.surname === 'BENCHEIKH' ? 'Détails du projet' : 'Project details'}</span>
            <span>→</span>
          </div>
        </div>
        <div class="project-media-wrapper">
          <img src="${p.image}" alt="${p.title}" class="project-img" loading="lazy">
        </div>
      </article>
    `).join('');

    // Attach project click & keyboard handlers
    const cards = projectsList.querySelectorAll('.project-card');
    cards.forEach(card => {
      const pId = card.getAttribute('data-project-id');
      card.addEventListener('click', () => openProjectModal(pId));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openProjectModal(pId);
        }
      });
    });
  }

  // SKILLS SECTION
  const skillsContainer = document.getElementById('skills-container');
  if (skillsContainer) {
    skillsContainer.innerHTML = data.skills.categories.map(cat => `
      <div class="skills-category-group">
        <h4 class="skills-category-title">
          <span>//</span> ${cat.name}
        </h4>
        <div class="skills-tags-grid">
          ${cat.items.map(item => `
            <div class="skill-pill">
              <span>${item}</span>
              <span class="skill-icon-dot"></span>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  // TIMELINE / PARCOURS SECTION
  const expList = document.getElementById('timeline-exp-list');
  const eduList = document.getElementById('timeline-edu-list');

  if (expList) {
    expList.innerHTML = data.timeline.experiences.map(item => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">${item.date}</div>
        <h4 class="timeline-role">${item.role}</h4>
        <div class="timeline-company">${item.company}</div>
        <p class="timeline-desc">${item.desc}</p>
      </div>
    `).join('');
  }

  if (eduList) {
    eduList.innerHTML = data.timeline.education.map(item => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">${item.date}</div>
        <h4 class="timeline-role">${item.role}</h4>
        <div class="timeline-company">${item.company}</div>
        <p class="timeline-desc">${item.desc}</p>
      </div>
    `).join('');
  }

  // CERTIFICATIONS SECTION
  const certGrid = document.getElementById('certifications-grid');
  if (certGrid) {
    certGrid.innerHTML = data.certifications.items.map(cert => `
      <div class="cert-card">
        <div>
          <div class="cert-badge">${cert.issuer} • ${cert.date}</div>
          <h4 class="cert-title">${cert.title}</h4>
        </div>
        <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); margin-top: 1rem; display: flex; align-items: center; gap: 0.4rem;">
          <span>✓ Verified Certification</span>
        </div>
      </div>
    `).join('');
  }

  // EXTRACURRICULAR / PARASCOLAIRE SECTION
  const extraGrid = document.getElementById('extracurricular-grid');
  if (extraGrid && data.extracurricular) {
    extraGrid.innerHTML = data.extracurricular.items.map(item => `
      <div class="extra-card">
        <div>
          <span class="extra-tag">${item.tag}</span>
          <h4 class="extra-role">${item.role}</h4>
          <div class="extra-org">${item.org}</div>
          <p class="extra-desc">${item.desc}</p>
        </div>
      </div>
    `).join('');
  }


  // LANGUAGES SECTION
  const langGrid = document.getElementById('languages-grid');
  if (langGrid) {
    langGrid.innerHTML = data.languages.items.map(l => `
      <div class="lang-card">
        <h4 class="lang-name">${l.name}</h4>
        <div class="lang-level">${l.level}</div>
      </div>
    `).join('');
  }

  // CONTACT SECTION
  const contactCtaTitle = document.getElementById('contact-cta-title');
  const contactSubtitle = document.getElementById('contact-subtitle');
  const contactDownloadCv = document.getElementById('contact-download-cv');

  if (contactCtaTitle) contactCtaTitle.textContent = data.contact.title;
  if (contactSubtitle) contactSubtitle.textContent = data.contact.subtitle;
  if (contactDownloadCv) contactDownloadCv.textContent = data.contact.downloadCv;

  // Contact form labels & buttons
  const formNameInput = document.getElementById('form-name');
  const formEmailInput = document.getElementById('form-email');
  const formMsgInput = document.getElementById('form-message');
  const formSubmitBtn = document.getElementById('form-submit-btn');

  if (formNameInput) formNameInput.placeholder = data.contact.formName;
  if (formEmailInput) formEmailInput.placeholder = data.contact.formEmail;
  if (formMsgInput) formMsgInput.placeholder = data.contact.formMessage;
  if (formSubmitBtn) formSubmitBtn.textContent = data.contact.formSubmit;

  // Form Submission handling
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.onsubmit = (e) => {
      e.preventDefault();
      const feedbackEl = document.getElementById('form-feedback');
      if (feedbackEl) {
        feedbackEl.style.display = 'block';
        feedbackEl.textContent = data.contact.successMsg;
        contactForm.reset();
        setTimeout(() => {
          feedbackEl.style.display = 'none';
        }, 5000);
      }
    };
  }

  // Re-trigger cursor listeners
  if (window.refreshCursorListeners) window.refreshCursorListeners();
}

/* GSAP Scroll Animations */
function initAnimations() {
  // Reveal titles
  gsap.utils.toArray('.section-heading, .giant-title').forEach(title => {
    gsap.from(title, {
      scrollTrigger: {
        trigger: title,
        start: 'top 85%',
      },
      y: 40,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
  });

  // Timeline height progress animation
  const timelineLine = document.querySelector('.timeline-progress-line');
  const timelineContainer = document.querySelector('.timeline-container');
  
  if (timelineLine && timelineContainer) {
    gsap.to(timelineLine, {
      height: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: timelineContainer,
        start: 'top 70%',
        end: 'bottom 80%',
        scrub: true
      }
    });
  }

  // Project cards reveal
  gsap.utils.toArray('.project-card').forEach(card => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    });
  });
}
