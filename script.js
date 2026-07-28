
document.querySelectorAll(".project-gallery").forEach(gallery => {

    const mainImage = gallery.querySelector(".main-image");

    gallery.querySelectorAll(".gallery img").forEach(img => {

        img.addEventListener("click", () => {

            mainImage.src = img.src;

        });

    });

});
const menu = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
document.querySelectorAll(".nav-links a").forEach(link=>{
    link.addEventListener("click",()=>{
        menu.classList.remove("active");
        navLinks.classList.remove("active");
    });
});
// Smooth reveal animation on scroll
const sections = document.querySelectorAll("section");

const revealSection = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealSection);
window.addEventListener("load", revealSection);

// Typing Effect
const text = "Aspiring Virtual Assistant Ready to Help Businesses Stay Organized and Productive.";
const typingElement = document.querySelector(".hero p");

let index = 0;

function typeText() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 80);
    }
}

if (typingElement) {
    typingElement.textContent = "";
    typeText();
}

