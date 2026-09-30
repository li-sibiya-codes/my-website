/* =========================================
   PORTFOLIO JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       ELEMENTS
    ========================================== */

    const nav = document.querySelector(".site-nav");
    const navLinks = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("main section");
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
       ACTIVE NAVIGATION
    ========================================== */

    const sectionObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }

                const currentSection = entry.target.getAttribute("id");

                navLinks.forEach((link) => {

                    link.classList.remove("active");

                    const linkTarget = link.getAttribute("href");

                    if (linkTarget === `#${currentSection}`) {
                        link.classList.add("active");
                    }

                });

            });

        },
        {
            rootMargin: "-35% 0px -55% 0px"
        }
    );


    sections.forEach((section) => {
        sectionObserver.observe(section);
    });


    /* =========================================
       NAVIGATION SCROLL EFFECT
    ========================================== */

    let lastScrollPosition = 0;

    window.addEventListener("scroll", () => {

        const currentScrollPosition = window.scrollY;

        if (!nav) {
            return;
        }

        if (currentScrollPosition > 40) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }

        lastScrollPosition = currentScrollPosition;

    });


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


    /* =========================================
       SMOOTH NAVIGATION
    ========================================== */

    navLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetID = link.getAttribute("href");

            if (!targetID.startsWith("#")) {
                return;
            }

            const target = document.querySelector(targetID);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

});