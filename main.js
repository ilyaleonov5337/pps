document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    // Secret voice
    const voiceConfirmationInput = document.getElementById('voiceConfirmation');
    const voiceConfirmationError = document.getElementById('voiceConfirmationError');
    const secretPhrase = 'я люблю гуап';

    if (voiceConfirmationInput.value.trim().toLowerCase() !== secretPhrase) {
        voiceConfirmationError.style.display = 'block';
        isValid = false;
    } else {
        voiceConfirmationError.style.display = 'none';
    }

    // Email validation
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    if (!email.validity.valid) {
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Username validation
    const username = document.getElementById('username');
    const usernameError = document.getElementById('usernameError');
    if (username.value.trim() === '') {
        usernameError.textContent = 'Пожалуйста, введите ваш логин.';
        usernameError.style.display = 'block';
        isValid = false;
    } else if (username.value.length < 3 || username.value.length > 8) {
        usernameError.style.display = 'block';
        isValid = false;
    } else {
        usernameError.style.display = 'none';
    }

    // Password validation
    const password = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    if (password.value.length < 8) {
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        passwordError.style.display = 'none';
    }

    // Confirm password validation
    const confirmPassword = document.getElementById('confirmPassword');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    if (confirmPassword.value !== password.value) {
        confirmPasswordError.style.display = 'block';
        isValid = false;
    } else {
        confirmPasswordError.style.display = 'none';
    }

    // Phone validation
    const phone = document.getElementById('phone');
    const phoneError = document.getElementById('phoneError');
    const phoneRegex = /^\+?\d{10,15}$/;
    if (!phoneRegex.test(phone.value)) {
        phoneError.style.display = 'block';
        isValid = false;
    } else {
        phoneError.style.display = 'none';
    }

    // Gender validation
    const raceError = document.getElementById('raceError');
    const race = document.querySelector('input[name="race"]:checked');
    if (!race) {
        raceError.style.display = 'block';
        isValid = false;
    } else {
        raceError.style.display = 'none';
    }

    // Hiding hints if error messages are displayed
    if (!isValid) {
        const hintMessages = document.querySelectorAll('.hint-message');
        hintMessages.forEach(function(hint) {
            hint.style.display = 'none';
        });
    }

    if (isValid) {
        alert('C Вами свяжутся по голубиной почте :)');
    }
});


document.getElementById('wrongButton').addEventListener('click', function() {
    alert('Не угадал!!!');
});
