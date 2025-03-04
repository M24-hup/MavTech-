document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Form submission handling
    const contactForm = document.querySelector("form");
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Thank you for reaching out! I'll get back to you soon.");
        contactForm.reset();
    });

    // Typing effect for hero section
    const heroText = "Crafting digital experiences with expertise in full-stack development, scriptwriting, and ethical hacking.";
    const heroElement = document.querySelector(".hero p");
    let index = 0;
    function typeEffect() {
        if (index < heroText.length) {
            heroElement.textContent += heroText.charAt(index);
            index++;
            setTimeout(typeEffect, 40);
        }
    }
    typeEffect();

    // Portfolio item hover effect
    const portfolioItems = document.querySelectorAll(".portfolio-item");
    portfolioItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.classList.add("hovered");
        });
        item.addEventListener("mouseleave", () => {
            item.classList.remove("hovered");
        });
    });
});
