/* ==========================================================================
   ANWAR BENCHEIKH - PROJECT DETAIL MODAL DRAWER
   ========================================================================== */

import { getData } from './i18n.js';

export function initModal() {
  const overlay = document.getElementById('project-modal-overlay');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!overlay || !closeBtn) return;

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeModal();
    }
  });
}

export function openProjectModal(projectId) {
  const data = getData();
  const project = data.projects.find(p => p.id === projectId);
  if (!project) return;

  const overlay = document.getElementById('project-modal-overlay');
  const modalBody = document.getElementById('modal-body-content');

  if (!overlay || !modalBody) return;

  const detail = project.detail || {};
  const isEn = data.hero.surname === "BENCHEIKH";

  modalBody.innerHTML = `
    <div style="font-family: var(--font-mono); color: var(--accent); font-size: 0.85rem; font-weight: 700; margin-bottom: 0.5rem;">
      ${project.index} // ${project.category}
    </div>
    <h2 style="font-family: var(--font-display); font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 800; line-height: 1.1; margin-bottom: 1.5rem; text-transform: uppercase;">
      ${project.title}
    </h2>

    <div style="aspect-ratio: 16/9; border-radius: 8px; overflow: hidden; margin-bottom: 2rem; border: 1px solid var(--border-color);">
      <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;">
    </div>

    <div style="display: flex; flex-direction: column; gap: 1.75rem;">
      <div>
        <h4 style="font-family: var(--font-mono); font-size: 0.8rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.5rem; letter-spacing: 0.1em;">
          ${isEn ? 'Context & Challenge' : 'Contexte & Défi'}
        </h4>
        <p style="font-size: 1.05rem; line-height: 1.7; color: var(--text-main);">
          ${project.context}
        </p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; background: var(--bg-card); padding: 1.25rem; border-radius: 8px; border: 1px solid var(--border-color);">
        <div>
          <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">${isEn ? 'My Role' : 'Mon Rôle'}</span>
          <div style="font-family: var(--font-display); font-weight: 700; font-size: 0.95rem; margin-top: 0.25rem;">${project.role}</div>
        </div>
        <div>
          <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">${isEn ? 'Key Outcome' : 'Résultat Clé'}</span>
          <div style="font-family: var(--font-display); font-weight: 700; font-size: 0.95rem; color: var(--accent); margin-top: 0.25rem;">${project.results}</div>
        </div>
      </div>

      ${detail.problem ? `
      <div>
        <h4 style="font-family: var(--font-mono); font-size: 0.8rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.5rem; letter-spacing: 0.1em;">
          ${isEn ? 'Technical Problem & Architecture' : 'Problématique Technique & Architecture'}
        </h4>
        <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-muted);">
          ${detail.problem}
        </p>
      </div>
      ` : ''}

      ${detail.features ? `
      <div>
        <h4 style="font-family: var(--font-mono); font-size: 0.8rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.75rem; letter-spacing: 0.1em;">
          ${isEn ? 'Key Implementation Features' : 'Fonctionnalités Clés Développées'}
        </h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.6rem;">
          ${detail.features.map(f => `
            <li style="display: flex; align-items: flex-start; gap: 0.75rem; font-size: 0.95rem; color: var(--text-main);">
              <span style="color: var(--accent); font-family: var(--font-mono); font-weight: 700;">▸</span>
              <span>${f}</span>
            </li>
          `).join('')}
        </ul>
      </div>
      ` : ''}

      <div>
        <h4 style="font-family: var(--font-mono); font-size: 0.8rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.75rem; letter-spacing: 0.1em;">
          ${isEn ? 'Technologies & Frameworks' : 'Technologies & Outils Mobilisés'}
        </h4>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          ${project.technologies.map(t => `
            <span style="font-family: var(--font-mono); font-size: 0.75rem; background: var(--bg-card); border: 1px solid var(--border-color); padding: 0.35rem 0.75rem; border-radius: 4px; color: var(--text-main);">
              ${t}
            </span>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('project-modal-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}
