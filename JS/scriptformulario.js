document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            // Validación de los campos del formulario
            const nombre = form.querySelector('input[name="nombre"]');
            const email = form.querySelector('input[name="email"]');
            const mensaje = form.querySelector('textarea[name="mensaje"]');

            // Validación básica
            if (nombre.value.trim() === '' || email.value.trim() === '' || mensaje.value.trim() === '') {
                alert('Por favor, complete todos los campos.');
                return;
            }

            // Validar formato de correo
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value.trim())) {
                alert('Por favor, ingrese un correo electrónico válido.');
                return;
            }

            // Si la validación pasa
            alert('¡Formulario enviado con éxito! Nos pondremos en contacto contigo pronto.');
            form.reset(); // Limpiar el formulario
        });
    }
});
