// ================= MOBILE NAVIGATION =================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


// Close menu when clicking navigation link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });

});


// ================= TYPING ANIMATION =================

const typingText = document.getElementById("typing");

const words = [
    "Web Developer",
    "IT Student",
    "Creative Thinker"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();


// ================= DARK / LIGHT MODE =================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("light")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});


// ================= SKILL ANIMATION =================

const progressBars =
    document.querySelectorAll(".progress-bar");

const skillsSection =
    document.getElementById("skills");

function animateSkills() {

    const sectionPosition =
        skillsSection.getBoundingClientRect().top;

    const screenPosition =
        window.innerHeight;

    if (sectionPosition < screenPosition - 100) {

        progressBars.forEach(bar => {

            bar.style.width =
                bar.getAttribute("data-width");

        });

    }

}

window.addEventListener("scroll", animateSkills);


// ================= PROJECT BUTTON =================

function showProject(projectName) {

    alert(
        "🚀 " + projectName +
        " project selected!\n\nProject details coming soon."
    );

}


// ================= CONTACT FORM =================

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    alert(
        "Thank you, " + name +
        "! Your message has been received. 😊"
    );

    contactForm.reset();

});


// ================= SCROLL TO TOP =================

const scrollTop =
    document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        scrollTop.style.display = "block";
    } else {
        scrollTop.style.display = "none";
    }

});

scrollTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});