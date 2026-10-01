/* =========================================
   PORTFOLIO JAVASCRIPT
========================================= */
 
document.addEventListener("DOMContentLoaded", () => {
 
    /* =========================================
       ELEMENTS
    ========================================== */
 
    const nav = document.querySelector(".site-nav");
    const heroIntro = document.querySelector(".hero-intro");
    const projectCards = document.querySelectorAll(".project-card");
    const footer = document.querySelector(".site-footer");
 
 
    /* =========================================
       DYNAMIC GREETING
    ========================================== */
 
    if (heroIntro) {
 
        const currentHour = new Date().getHours();
 
        let greeting;
 
        if (currentHour < 12) {
            greeting = "Good morning, I'm";
        } else if (currentHour < 18) {
            greeting = "Good afternoon, I'm";
        } else {
            greeting = "Good evening, I'm";
        }
 
        heroIntro.textContent = greeting;
    }
 
 
    /* =========================================
       SCROLL REVEAL
    ========================================== */
 
    const revealElements = document.querySelectorAll(
        ".content-section, .project-card, .education-card, .leadership-card"
    );
 
    revealElements.forEach((element) => {
        element.classList.add("reveal");
    });
 
 
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
 
            entries.forEach((entry) => {
 
                if (entry.isIntersecting) {
 
                    entry.target.classList.add("visible");
 
                    observer.unobserve(entry.target);
                }
 
            });
 
        },
        {
            threshold: 0.12
        }
    );
 
 
    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });
 
 
    /* =========================================
       NAVIGATION SCROLL EFFECT
    ========================================== */
 
    if (nav) {
 
        const updateNav = () => {
            nav.classList.toggle("scrolled", window.scrollY > 40);
        };
 
        window.addEventListener("scroll", updateNav);
        updateNav();
    }
 
 
    /* =========================================
       PROJECT CARD INTERACTION
    ========================================== */
 
    projectCards.forEach((card) => {
 
        card.addEventListener("mouseenter", () => {
            card.classList.add("project-hover");
        });
 
        card.addEventListener("mouseleave", () => {
            card.classList.remove("project-hover");
        });
 
    });
 
 
    /* =========================================
       CURRENT YEAR
    ========================================== */
 
    if (footer) {
 
        const currentYear = new Date().getFullYear();
 
        const footerParagraphs = footer.querySelectorAll("p");
 
        footerParagraphs.forEach((paragraph) => {
 
            if (paragraph.textContent.includes("©")) {
                paragraph.textContent =
                    `© ${currentYear} Lindelihle Sibiya`;
            }
 
        });
 
    }
 
});
 