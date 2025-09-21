const numStars = 120;
const sky = document.querySelector('.sky');

for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    // Tamaño aleatorio
    const size = Math.random() * 3 + 2;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.transform = `translate(-50%, -50%) scale(${Math.random() * 0.8 + 0.3})`;

    // Posición inicial
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;

    // Duración aleatoria del parpadeo
    const duration = Math.random() * 2.5 + 1.5;
    star.style.animationDuration = `${duration}s`;

    // Al finalizar un parpadeo, cambia de posición
    star.addEventListener('animationiteration', () => {
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.transform = `translate(-50%, -50%) scale(${Math.random() * 0.8 + 0.3})`;
    });

    sky.appendChild(star);
}
