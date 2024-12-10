document.addEventListener("DOMContentLoaded", function () {
    const sendBtn = document.getElementById('sendBtn');
    const userInput = document.getElementById('userInput');
    const responseText = document.getElementById('responseText');

    sendBtn.addEventListener('click', function () {
        const message = userInput.value.trim();
        if (message === "") return;
        responseText.textContent = "Procesando tu mensaje...";
        setTimeout(() => {
            responseText.textContent = getChatGPTResponse(message);
        }, 2000);
        userInput.value = "";
    });

    function getChatGPTResponse(message) {
        const responses = {
            "hola": "¡Hola! ¿Cómo puedo ayudarte hoy?",
            "qué es tu servicio": "Ofrecemos soluciones tecnológicas personalizadas para empresas, enfocándonos en eficiencia y calidad.",
            "cómo puedo contactarlos": "Puedes contactarnos a través de nuestro formulario de contacto en esta página o por email a contacto@ejemplo.com.",
            "gracias": "¡De nada! Si tienes alguna otra pregunta, no dudes en preguntar.",
            "default": "Lo siento, no entendí tu mensaje. ¿Puedes reformularlo?"
        };
        const lowerMessage = message.toLowerCase();
        return responses[lowerMessage] || responses["default"];
    }
});
