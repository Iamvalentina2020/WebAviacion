document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach((item) => {
        item.addEventListener('click', (event) => {
            const imgSrc = item.querySelector('img').src;
            const itemTitle = item.querySelector('h3').textContent;
            const itemDescription = item.querySelector('p').textContent;

            // Mostrar la imagen en una vista ampliada o modal
            const modal = document.querySelector('#galleryModal');
            const modalImage = modal.querySelector('.modal-body img');
            const modalTitle = modal.querySelector('.modal-title');
            const modalDescription = modal.querySelector('.modal-description');

            modalImage.src = imgSrc;
            modalTitle.textContent = itemTitle;
            modalDescription.textContent = itemDescription;

            // Mostrar el modal
            const bootstrapModal = new bootstrap.Modal(modal);
            bootstrapModal.show();
        });
    });
});
