/* ==========================================================================
   ANWAR BENCHEIKH - CUSTOM MAGNETIC CURSOR
   ========================================================================== */

export function initCustomCursor() {
  const dot = document.querySelector('.custom-cursor-dot');
  const ring = document.querySelector('.custom-cursor-ring');

  if (!dot || !ring) return;

  let mouseX = -100;
  let mouseY = -100;
  let ringX = -100;
  let ringY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  // Smooth ring animation loop
  function render() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;

    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

  // Add hover classes for interactive elements
  const updateInteractiveListeners = () => {
    const interactiveEls = document.querySelectorAll('a, button, input, textarea, .project-card, .skill-pill, .cert-card');
    
    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', () => {
        if (el.classList.contains('project-card')) {
          ring.classList.add('hover-project');
          ring.textContent = 'VOIR';
        } else {
          ring.classList.add('hovered');
        }
      });

      el.addEventListener('mouseleave', () => {
        ring.classList.remove('hovered', 'hover-project');
        ring.textContent = '';
      });
    });
  };

  updateInteractiveListeners();
  window.refreshCursorListeners = updateInteractiveListeners;
}
