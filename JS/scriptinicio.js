// Inicialización de animaciones para la página de inicio
document.addEventListener('DOMContentLoaded', () => {
    // Animación de entrada del encabezado
    const headerTitle = document.querySelector('header h1');
    const headerSubtitle = document.querySelector('header p');

    if (headerTitle && headerSubtitle) {
        headerTitle.classList.add('animate__animated', 'animate__fadeInDown');
        headerSubtitle.classList.add('animate__animated', 'animate__fadeInUp');
    }

    // Función para el carrusel de la página de inicio
    const homeCarousel = document.querySelector('.home-carousel');
    if (homeCarousel) {
        const carousel = new bootstrap.Carousel(homeCarousel, {
            interval: 5000, // Intervalo de 5 segundos
            ride: 'carousel'
        });
    }
});
