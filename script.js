// Theme Toggle
const toggleBtn = document.getElementById("theme-toggle");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    toggleBtn.textContent = "☀️";
} else {
    toggleBtn.textContent = "🌙";
}

// Switch theme
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "🌙";
    }
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

// Current Year in Footer
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML =
        `© ${new Date().getFullYear()} Lowell Nikoleigh Pascua | Virtual Assistant Portfolio`;
}