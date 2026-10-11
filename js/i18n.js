/* ==========================================================================
   ANWAR BENCHEIKH - I18N BILINGUAL MANAGER (FR / EN)
   ========================================================================== */

import { portfolioData } from './data.js';

let currentLang = localStorage.getItem('ab_lang') || 'fr';

export function getLang() {
  return currentLang;
}

export function getData() {
  return portfolioData[currentLang];
}

export function initI18n(onLanguageChangeCallback) {
  const langToggleBtn = document.getElementById('lang-toggle');
  
  // Set initial button text
  updateLangButtonText();

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      currentLang = currentLang === 'fr' ? 'en' : 'fr';
      localStorage.setItem('ab_lang', currentLang);
      updateLangButtonText();
      
      if (onLanguageChangeCallback) {
        onLanguageChangeCallback(currentLang);
      }
    });
  }
}

function updateLangButtonText() {
  const langToggleBtn = document.getElementById('lang-toggle');
  if (langToggleBtn) {
    const textSpan = langToggleBtn.querySelector('.lang-text');
    if (textSpan) {
      textSpan.textContent = currentLang === 'fr' ? 'EN' : 'FR';
    }
  }
}
