// Abrir el modal con el contenido de la noticia
function openNews(newsId) {
    const modal = document.getElementById('newsModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalText = document.getElementById('modalText');

    // Establecer el contenido de la noticia basado en el ID
    if (newsId === 1) {
        modalTitle.innerHTML = "Nuevas tendencias en tecnología 2024";
        modalText.innerHTML = "En este artículo exploramos las nuevas tendencias en tecnología que están marcando el rumbo para el año 2024, desde la inteligencia artificial hasta la computación cuántica...";
    } else if (newsId === 2) {
        modalTitle.innerHTML = "El impacto de la IA en los negocios";
        modalText.innerHTML = "La Inteligencia Artificial (IA) está revolucionando los negocios a nivel global. En este artículo profundizamos en cómo está cambiando los procesos empresariales y la gestión de la fuerza laboral...";
    } else if (newsId === 3) {
        modalTitle.innerHTML = "Avances en energía renovable";
        modalText.innerHTML = "El futuro de las energías renovables parece prometedor. A medida que la tecnología avanza, nuevos métodos para generar energía limpia están transformando la industria energética a nivel mundial...";
    }

    modal.style.display = "block";
}

// Cerrar el modal
function closeModal() {
    const modal = document.getElementById('newsModal');
    modal.style.display = "none";
}
