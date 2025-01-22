const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars")
});

navLinks.addEventListener("click", (e) =>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "fa-solid fa-bars")
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: "1000",
};

ScrollReveal().reveal(".header_image img", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".header_container h1",{
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header_content .section_description",{
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header_btns",{
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".header_stats",{
    ...scrollRevealOption,
    delay: 2000,
});


ScrollReveal().reveal(".genre_card",{
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".feature_image img",{
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".feature_content .section_header",{
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".feature_list li",{
    ...scrollRevealOption,
    delay: 1000,
    interval: 500,
});

const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
});