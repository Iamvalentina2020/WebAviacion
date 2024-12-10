
document.addEventListener('DOMContentLoaded', () => {
    // Selección de elementos del DOM
    const circle = document.querySelector('.circle');
    const slider = document.querySelector('.slider');
    const list = document.querySelector('.list');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    const items = document.querySelectorAll('.list .item');
    const count = items.length;
    let active = 1; // Ítem activo inicial (índice 1)
    let leftTransform = 0;
    let width_item = items[active].offsetWidth; // Ancho del ítem activo

    // Función para actualizar el ancho del ítem activo (útil en responsive)
    const updateWidthItem = () => {
        width_item = items[active].offsetWidth;
    };

    // Event listener para redimensionar la ventana y actualizar el ancho del ítem
    window.addEventListener('resize', updateWidthItem);

    // Función para actualizar el carrusel
    const runCarousel = () => {
        // Mostrar u ocultar botones de navegación según el ítem activo
        if (prev && next) {
            prev.style.display = (active === 0) ? 'none' : 'block';
            next.style.display = (active === count - 1) ? 'none' : 'block';
        }

        // Remover clase 'active' del ítem previamente activo
        const old_active = document.querySelector('.item.active');
        if (old_active) old_active.classList.remove('active');

        // Añadir clase 'active' al nuevo ítem activo
        if (items[active]) {
            items[active].classList.add('active');
        }

        // Calcular la transformación en X para desplazar el carrusel
        leftTransform = width_item * (active - 1) * -1;
        list.style.transform = `translateX(${leftTransform}px)`;
    };

    // Función para avanzar al siguiente ítem
    const goToNext = () => {
        if (active < count - 1) {
            active += 1;
            runCarousel();
        }
    };

    // Función para retroceder al ítem anterior
    const goToPrev = () => {
        if (active > 0) {
            active -= 1;
            runCarousel();
        }
    };

    // Asignar funciones de navegación a los botones
    if (next) {
        next.addEventListener('click', goToNext);
    }

    if (prev) {
        prev.addEventListener('click', goToPrev);
    }

    // Configurar el auto-slide para avanzar automáticamente cada 5 segundos
    const autoSlide = setInterval(() => {
        if (active < count - 1) {
            active += 1;
        } else {
            active = 0; // Reiniciar al primer ítem
        }
        runCarousel();
    }, 5000);

    // Detener el auto-slide cuando el usuario interactúa con los botones
    [prev, next].forEach(button => {
        if (button) {
            button.addEventListener('click', () => {
                clearInterval(autoSlide);
            });
        }
    });

    // Inicializar el carrusel al cargar la página
    runCarousel();

    // Configuración del texto dentro de la clase .circle para rotación
    if (circle) {
        const textCircle = circle.innerText.trim().split(''); // Dividir el texto en caracteres
        circle.innerText = ''; // Limpiar el texto original

        textCircle.forEach((value, key) => {
            const newSpan = document.createElement("span"); // Crear un nuevo span para cada carácter
            newSpan.innerText = value; // Asignar el carácter al span
            const rotateThisSpan = (360 / textCircle.length) * (key + 1); // Calcular la rotación
            newSpan.style.setProperty('--rotate', `${rotateThisSpan}deg`); // Asignar la rotación al CSS
            circle.appendChild(newSpan); // Añadir el span al círculo
        });
    }
});
