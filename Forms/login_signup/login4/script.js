const inputs = document.querySelectorAll(".input-group input");

inputs.forEach(input => {
    input.addEventListener('input', function () {
        if (input.value !== "") {
            input.classList.add("has-value");
        } else {
            input.classList.remove("has-value");
        }
    });
});

const signInBtnLink = document.querySelector(".signInbtn-link");
const signUpBtnLink = document.querySelector(".signUpbtn-link");
const resetPassLink = document.querySelector(".resetPass-link");
const goBackLink = document.querySelector(".goBack-link");
const wrapper = document.querySelector(".wrapper");

signUpBtnLink.addEventListener("click", () => {
    wrapper.classList.toggle("active");
});

signInBtnLink.addEventListener("click", () => {
    wrapper.classList.toggle("active");
});

resetPassLink.addEventListener("click", () => {
    wrapper.classList.toggle("forgot");
});

goBackLink.addEventListener("click", () => {
    wrapper.classList.toggle("forgot");
});