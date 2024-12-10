// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    // Animación de bienvenida al cargar la página (si existe)
    const welcomeText = document.querySelector('.display-4');
    const welcomeSubText = document.querySelector('.lead');

    if (welcomeText && welcomeSubText) {
        welcomeText.classList.add('animate__animated', 'animate__fadeInDown');
        welcomeSubText.classList.add('animate__animated', 'animate__fadeInUp');
    }

    // Inicialización del carrusel de Bootstrap (si existe)
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach((carouselElement) => {
        const carousel = new bootstrap.Carousel(carouselElement, {
            interval: 3000, // Intervalo de 3 segundos entre imágenes
            ride: 'carousel'
        });

        // Pausar el carrusel al pasar el ratón sobre él
        carouselElement.addEventListener('mouseenter', () => {
            carousel.pause();
        });

        // Reanudar el carrusel al quitar el ratón
        carouselElement.addEventListener('mouseleave', () => {
            carousel.cycle();
        });
    });

    // Función para mostrar mensaje de agradecimiento en el formulario
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevenir el envío normal del formulario
            alert("¡Gracias por enviarnos tus datos! Nos pondremos en contacto contigo pronto.");
            form.reset(); // Restablecer el formulario
        });
    }

    // Desplazamiento suave a una sección cuando se hace clic en un botón con clase .btn-pink
    const exploreButtons = document.querySelectorAll('.btn-pink');
    exploreButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = button.getAttribute('href').substring(1); // Obtener el ID de la sección
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
