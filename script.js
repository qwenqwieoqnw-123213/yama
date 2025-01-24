const imagesContainer = document.querySelector('.carousel-images');
const buttons = document.querySelectorAll('.carousel-btn');

let currentIndex = 0;
const totalImages = buttons.length;

// Cambiar imagen automáticamente
function autoSlide() {
    currentIndex = (currentIndex + 1) % totalImages; // Incrementa el índice cíclicamente
    updateCarousel();
}

// Actualizar la posición del carrusel
function updateCarousel() {
    imagesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    buttons.forEach((btn, index) => {
        btn.classList.toggle('active', index === currentIndex);
    });
}

// Cambiar imagen manualmente al hacer clic en los botones
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

// Iniciar el carrusel automático
let slideInterval = setInterval(autoSlide, 3000); // Cambia de imagen cada 3 segundos

// Detener el carrusel al interactuar con los botones y reanudarlo
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => clearInterval(slideInterval));
    button.addEventListener('mouseleave', () => {
        slideInterval = setInterval(autoSlide, 3000);
    });
});


const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle del menú hamburguesa
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    // Animación del ícono hamburguesa
    hamburger.classList.toggle('active');
});

// Opcional: Cierra el menú al hacer clic en un enlace
navLinks.addEventListener('click', () => {
    navLinks.classList.remove('show');
    hamburger.classList.remove('active');
});

const hamburgerSecondary = document.querySelector('.hamburger-secondary');
const navLinksSecondary = document.querySelector('.secondary-nav-links');

// Toggle del menú hamburguesa
hamburgerSecondary.addEventListener('click', () => {
    navLinksSecondary.classList.toggle('show-secondary');
    hamburgerSecondary.classList.toggle('active-secondary');
});

