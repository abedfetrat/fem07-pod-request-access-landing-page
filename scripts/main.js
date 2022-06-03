const registrationForm = document.querySelector('.registration-form');
const emailField = document.getElementById('email-field');
const submitBtn = document.getElementById('submit-btn');

let hasSubmitted = false;

emailField.addEventListener('input', (e) => {
    // Skip showing errors before first submission
    if (!hasSubmitted) {
        return;
    }

    if (emailField.validity.valid) {
        emailField.removeAttribute('data-invalid');

    } else {
        emailField.setAttribute('data-invalid', 'true');
    }
});

registrationForm.addEventListener('submit', (e) => {
    hasSubmitted = true;

    if (!emailField.validity.valid) {
        emailField.setAttribute('data-invalid', 'true');
        e.preventDefault();
    }
});