const toggle=document.querySelector(".more");
const nav=document.querySelector(".nav");

toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});