document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById('contact-form');
    const responseMessage = document.getElementById('response-message');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();


        responseMessage.textContent = "Contacto guardado para Avior SRL";
        responseMessage.style.display = 'block';


        setTimeout(() => {
            responseMessage.style.display = 'none';
            contactForm.reset();
        }, 5000);
    });
});
