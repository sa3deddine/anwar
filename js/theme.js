/* ==========================================================================
   ANWAR BENCHEIKH - THEME MANAGER (DARK / LIGHT MODE)
   ========================================================================== */

export function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (!themeToggleBtn) return;

  // Read saved theme preference or default to light (#F4F1EA off-white)
  const savedTheme = localStorage.getItem('ab_theme') || 'light';
  applyTheme(savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
    localStorage.setItem('ab_theme', newTheme);
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (themeToggleBtn) {
    const iconSpan = themeToggleBtn.querySelector('.theme-icon');
    const textSpan = themeToggleBtn.querySelector('.theme-text');
    if (theme === 'dark') {
      if (iconSpan) iconSpan.textContent = '☀️';
      if (textSpan) textSpan.textContent = 'LIGHT';
    } else {
      if (iconSpan) iconSpan.textContent = '🌙';
      if (textSpan) textSpan.textContent = 'DARK';
    }
  }
}
