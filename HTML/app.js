document.getElementById('sendBtn').addEventListener('click', async function () {
    const userInput = document.getElementById('userInput').value;

    if (userInput.trim() === "") {
        alert("Por favor, ingresa un mensaje.");
        return;
    }

    // Cambiar el contenido de la interfaz para mostrar que estamos esperando
    document.getElementById('responseText').innerHTML = "Cargando...";

    try {
        // Realizamos una solicitud a la API de OpenAI (con el nuevo endpoint y modelo GPT-3.5)
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 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'  // Reemplaza con tu clave API
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo-0125',  // Usamos el modelo GPT-3.5
                messages: [
                    { "role": "user", "content": userInput }
                ],
                max_tokens: 150
            })
        });

        const data = await response.json();

        if (response.ok) {
            // Mostramos la respuesta de la API en el contenedor
            document.getElementById('responseText').innerHTML = data.choices[0].message.content.trim();
        } else {
            // Si hay un error con la API, mostramos el mensaje de error
            document.getElementById('responseText').innerHTML = `Error: ${data.error.message}`;
        }

    } catch (error) {
        // En caso de error de red, mostramos un mensaje
        document.getElementById('responseText').innerHTML = "Error al conectar con la API.";
    }
});
