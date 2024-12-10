document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    
    cards.forEach(card => {
        card.addEventListener("mouseenter", function () {
            card.classList.add("animate__animated", "animate__zoomIn");
        });

        card.addEventListener("mouseleave", function () {
            card.classList.remove("animate__animated", "animate__zoomIn");
        });
    });
});
