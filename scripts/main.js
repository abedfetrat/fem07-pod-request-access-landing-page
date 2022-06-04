const registrationForm = document.querySelector('.registration-form');
const inputContainer = document.querySelector('.input-container');
const emailField = document.getElementById('email-field');
const submitBtn = document.getElementById('submit-btn');

let hasSubmitted = false;

emailField.addEventListener('input', (e) => {
    // Skip showing errors before first submission
    if (!hasSubmitted) {
        return;
    }

    if (emailField.validity.valid) {
        inputContainer.removeAttribute('data-error');
    } else {
        setError();
    }
});

registrationForm.addEventListener('submit', (e) => {
    hasSubmitted = true;

    if (!emailField.validity.valid) {
        setError();
        e.preventDefault();
    }
});

function setError() {
    if (emailField.validity.valueMissing) {
        inputContainer.setAttribute('data-error', 'Oops! Please add your email');

    } else {
        inputContainer.setAttribute('data-error', 'Oops! Please check your email');
    }
}