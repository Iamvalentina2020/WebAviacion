document.addEventListener("DOMContentLoaded", function() {
    // Temporizador para la oferta 1
    function startCountdown(elementId, duration) {
        let countdown = duration;
        const element = document.getElementById(elementId);

        const interval = setInterval(function() {
            const hours = Math.floor(countdown / 3600);
            const minutes = Math.floor((countdown % 3600) / 60);
            const seconds = countdown % 60;

            element.textContent = `${hours}:${minutes}:${seconds}`;

            if (countdown <= 0) {
                clearInterval(interval);
                element.textContent = "Oferta Expirada";
            } else {
                countdown--;
            }
        }, 1000);
    }

    // Iniciar temporizadores con duración en segundos (por ejemplo, 3600 segundos = 1 hora)
    startCountdown('countdown1', 3600); // Oferta 1
    startCountdown('countdown2', 7200); // Oferta 2
    startCountdown('countdown3', 10800); // Oferta 3
});
