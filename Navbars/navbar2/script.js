const toggle = document.querySelector(".nav-toggle");
const open = document.querySelector(".nav-open");
const close = document.querySelector(".nav-close");
const items = document.querySelectorAll(".nav-item");

toggle.addEventListener("click", () => {
    open.classList.toggle("active");
    close.classList.toggle("active");
    items.forEach(item => item.classList.toggle("active"));
    }
);