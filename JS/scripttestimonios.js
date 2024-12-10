document.addEventListener('DOMContentLoaded', () => {
    const testimonialItems = document.querySelectorAll('.testimonio');

    testimonialItems.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('animate__animated', 'animate__pulse');
        });

        item.addEventListener('mouseleave', () => {
            item.classList.remove('animate__animated', 'animate__pulse');
        });
    });
});
