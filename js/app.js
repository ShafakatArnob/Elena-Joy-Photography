const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const links = document.querySelectorAll("a");

burger.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    line1.classList.toggle("cross1");
    line2.classList.toggle("cross2");
    line3.classList.toggle("cross3");
})

links.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.toggle("nav-open");
        line1.classList.toggle("cross1");
        line2.classList.toggle("cross2");
        line3.classList.toggle("cross3");
    })
})
