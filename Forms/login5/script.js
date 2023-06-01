const pageBox = document.querySelector(".page-box");
const btnNext = document.querySelector(".btn-next");
const btnBack = document.querySelector(".btn-back");
const checkPass = document.querySelector(".checkbox-pass");
const emailfield = document.querySelector(".email");
const passfield = document.querySelector(".password");
const loginTitle = document.querySelector(".title-text");
const user = document.querySelector(".user-email");

emailfield.oninput = () => {
    if (emailfield.validity.valid) {
        btnNext.disabled = false;
    } else {
        btnNext.disabled = true;
    }
};

btnNext.onclick = (e) => {
    e.preventDefault();
    pageBox.classList.add("active-pass");
    loginTitle.innerHTML = "Welcome";
    user.innerHTML = emailfield.value;
    setTimeout(() => {
        passfield.focus();
    }, 500);
};

btnBack.onclick = (e) => {
    e.preventDefault();
    loginTitle.innerHTML = "Login";
    user.innerHTML = "please login to use the platform";
    pageBox.classList.remove("active-pass");
    setTimeout(() => {
        emailfield.focus();
    }, 500);
};

checkPass.onclick = () => {
    if (checkPass.checked) {
        passfield.setAttribute("type", "text");
    } else {
        passfield.setAttribute("type", "password");
    }
};


const inputs = document.querySelectorAll(".input-box input");

inputs.forEach(input => {
    input.addEventListener('input', function () {
        if (input.value !== "") {
            input.classList.add("has-value");
        } else {
            input.classList.remove("has-value");
        }
    });
});