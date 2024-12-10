document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById('registrationForm');
    const responseMessage = document.createElement('div');
    responseMessage.classList.add('response-message');
    document.querySelector('.registration-container').appendChild(responseMessage);

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();
        let valid = true;

        const firstName = document.getElementById('firstName');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');
        const terms = document.getElementById('terms');

        if (firstName.value.trim() === '') {
            document.getElementById('nameError').style.display = 'block';
            valid = false;
        } else {
            document.getElementById('nameError').style.display = 'none';
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            document.getElementById('emailError').style.display = 'block';
            valid = false;
        } else {
            document.getElementById('emailError').style.display = 'none';
        }

        if (phone.value.trim() === '') {
            document.getElementById('phoneError').style.display = 'block';
            valid = false;
        } else {
            document.getElementById('phoneError').style.display = 'none';
        }

        if (password.value.length < 6) {
            document.getElementById('passwordError').style.display = 'block';
            valid = false;
        } else {
            document.getElementById('passwordError').style.display = 'none';
        }

        if (password.value !== confirmPassword.value) {
            document.getElementById('confirmPasswordError').style.display = 'block';
            valid = false;
        } else {
            document.getElementById('confirmPasswordError').style.display = 'none';
        }

        if (!terms.checked) {
            valid = false;
        }

        if (valid) {
            responseMessage.textContent = "Contacto guardado para avior srl";
            responseMessage.style.display = 'block';
            setTimeout(() => {
                responseMessage.style.display = 'none';
                registrationForm.reset();
            }, 5000);
        }
    });
});

function openModal() {
    document.getElementById('termsModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('termsModal').style.display = 'none';
}

function acceptTerms() {
    document.getElementById('terms').checked = true;
    closeModal();
}
