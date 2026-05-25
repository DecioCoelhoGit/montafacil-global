// ========================================
// MONTAFÁCIL GLOBAL
// MOTION EXPERIENCE
// ========================================

// REVEAL ON SCROLL

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        const visiblePoint = 120;

        if (elementTop < windowHeight - visiblePoint) {

            element.classList.add("active");

        } else {

            element.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// PARALLAX SUAVE

window.addEventListener("scroll", () => {

    const scrolled = window.pageYOffset;

    document.body.style.backgroundPositionY =
        -(scrolled * 0.08) + "px";
});


