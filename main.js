document.addEventListener('DOMContentLoaded', () => {
  // elimina clase container al cargar (si la tienes)
  if (document.body.classList.contains('container')) {
    document.body.classList.remove('container');
  }

const numStars = 120;
let sky = document.querySelector('.sky');
// some pages (flower.html) may not have a .sky container; create one so script won't fail
if (!sky) {
  sky = document.createElement('div');
  sky.className = 'sky';
  sky.setAttribute('aria-hidden', 'true');
  // ensure it's behind content and non-interactive
  sky.style.position = 'fixed';
  sky.style.inset = '0';
  sky.style.zIndex = '-3';
  sky.style.pointerEvents = 'none';
  document.body.appendChild(sky);
}

for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    // Tamaño aleatorio entre 1px y 3px
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // Posición inicial
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;

    // Duración del parpadeo (1.5s - 4s)
    const duration = Math.random() * 2.5 + 1.5;
    star.style.animationDuration = `${duration}s`;

    // Cada vez que termina su animación, se mueve a otra parte
    star.addEventListener('animationiteration', () => {
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
    });

    sky.appendChild(star);
} 

  // click/touch to spawn burst of stars (uses inline transitions to ensure visibility)
  function spawnStarBurst(clientX, clientY, count = 12) {
    for (let i = 0; i < count; i++) {
  const s = document.createElement('img');
  s.className = 'click-star';
  s.src = 'img/star.webp';
  s.setAttribute('data-img','true');
  const angle = Math.random() * Math.PI * 2;
  const dist = 20 + Math.random() * 50; // reduced spread
  const tx = Math.cos(angle) * dist;
  const ty = Math.sin(angle) * dist * -0.7; // less vertical travel
  const size = (4 + Math.random() * 8) * 4; // doubled again (total x4)
  const dur = 0.45 + Math.random() * 0.6; // slightly shorter duration

      // initial styles
      s.style.left = `${clientX}px`;
      s.style.top = `${clientY}px`;
  s.style.setProperty('--size', `${size}px`);
  s.width = size; // fallback sizing for img
  s.height = size;
      s.style.zIndex = 9999;
      s.style.opacity = '1';
      s.style.transform = 'translate(-50%,-50%) scale(0.3)';
      s.style.transition = `transform ${dur}s cubic-bezier(.1,.8,.2,1), opacity ${dur}s ease-out`;

      document.body.appendChild(s);

      // trigger transition
      // small timeout to ensure the element is in the DOM
      setTimeout(() => {
        s.style.transform = `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(1.1)`;
        s.style.opacity = '0';
      }, 20);

      // cleanup
      setTimeout(() => s.remove(), (dur + 0.05) * 1000);
    }
  }

  document.addEventListener('click', (e) => {
    if (e.target.closest('a, button')) return;
    try { console.debug('click spawn at', e.clientX, e.clientY); } catch(e){}
    spawnStarBurst(e.clientX, e.clientY, 12);
  });

  // support touch
  document.addEventListener('touchstart', (ev) => {
    const t = ev.touches[0];
    if (!t) return;
    spawnStarBurst(t.clientX, t.clientY, 10);
  }, {passive: true});
});
