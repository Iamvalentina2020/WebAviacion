document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        item.addEventListener("click", function () {
            this.classList.toggle("active");
            faqItems.forEach(otherItem => {
                if (otherItem !== this) {
                    otherItem.classList.remove("active");
                }
            });
        });
    });

    const backToTopBtn = document.querySelector(".back-to-top");

    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
