function submitForm(fieldGroup) {
    var form = document.getElementById('myForm');
    var formData = new FormData(form);
    var fieldsToSubmit = document.getElementById(fieldGroup).querySelectorAll('input');
    // Clear previously submitted fields
    for (var i = 0; i < fieldsToSubmit.length; i++) {
        formData.delete(fieldsToSubmit[i].name);
    }
    // Add fields from the current group to the form data
    for (var i = 0; i < fieldsToSubmit.length; i++) {
        if (fieldsToSubmit[i].value === '') {
            alert('Please fill in all the fields!');
            return;
        }
        formData.append(fieldsToSubmit[i].name, fieldsToSubmit[i].value);
    }
    // Submit the form
    fetch(form.action, {
        method: form.method,
        body: formData
    }).then(response => {
        alert('Form submitted!');
    }).catch(error => {
        alert('An error occurred while submitting the form!');
    });
}

const signupBtn = document.getElementById('signup-btn');
const signinBtn = document.getElementById('signin-btn');
const title = document.getElementById('title');
const nameField = document.getElementById('name-field');
const passField = document.getElementById('pass-field');
const confirmField = document.getElementById('confirm-field');
const formText = document.getElementById('form-text');

signupBtn.addEventListener('click', () => {
    if (signupBtn.classList.contains('active')) {
        submitForm('signup-fields');
        return;
    }
    title.innerHTML = 'Sign Up';
    nameField.style.maxHeight = '65px';
    confirmField.style.maxHeight = '65px';
    formText.innerHTML = 'Terms and Conditions <a href="#">Click Here</a>';
    signupBtn.classList.add('active');
    signinBtn.classList.remove('active');
});

signinBtn.addEventListener('click', () => {
    if (signinBtn.classList.contains('active')) {
        submitForm('signin-fields');
        return;
    }
    title.innerHTML = 'Sign In';
    nameField.style.maxHeight = '0';
    confirmField.style.maxHeight = '0';
    formText.innerHTML = 'Forgot Password? <a href="#">Click Here</a>';
    signinBtn.classList.add('active');
    signupBtn.classList.remove('active');
});

const passEye = document.querySelector('#pass-field #toggle');
const confirmEye = document.querySelector('#confirm-field #toggle');
const passInput = document.querySelector('#pass-field-password');
const confirmInput = document.querySelector('#confirm-field-password');

passEye.addEventListener('click', () => {
    if (passEye.classList.contains('fa-eye-slash')) {
        passEye.classList.remove('fa-eye-slash');
        passEye.classList.add('fa-eye');
        passInput.type = 'text';
    } else {
        passEye.classList.remove('fa-eye');
        passEye.classList.add('fa-eye-slash');
        passInput.type = 'password';
    }
});

confirmEye.addEventListener('click', () => {
    if (confirmEye.classList.contains('fa-eye-slash')) {
        confirmEye.classList.remove('fa-eye-slash');
        confirmEye.classList.add('fa-eye');
        confirmInput.type = 'text';
    } else {
        confirmEye.classList.remove('fa-eye');
        confirmEye.classList.add('fa-eye-slash');
        confirmInput.type = 'password';
    }
});