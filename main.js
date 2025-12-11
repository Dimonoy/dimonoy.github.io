import { updateLocalTime, updateAge, updateExperience } from "./modules/time.mjs";
import { calculateMidPositions, selectElementWithClass } from "./modules/utils.mjs";


/* Run local-time clock */
{
    // Run local-time clock
    updateLocalTime();

    // Update my age
    updateAge();

    // Update amount of non-working experience
    updateExperience();
}

/* Resets active styles for menu elements */
document.querySelectorAll(".main-header .menu__item").forEach((menuItemElement) => {
    menuItemElement.addEventListener("click", (event) => {
        const menuItemElements = document.querySelectorAll(".main-header .menu__item");
        const targetMenuItemElement = event.target.parentNode;

        selectElementWithClass(menuItemElements, targetMenuItemElement, "menu__item--active")
    })
});

function onScroll() {
    /* Add header background when scrolling down for the fixed main header */
    const mainHeader = document.getElementById("main-header");

    if (window.scrollY > 10) {
        mainHeader.classList.add("main-header-background");
    } else {
        mainHeader.classList.remove("main-header-background");
    }

    const globalViewportMidThreshold = window.innerHeight / 2;
    let localViewportMidThreshold = globalViewportMidThreshold;

    // Light experience arrow indicators
    localViewportMidThreshold = globalViewportMidThreshold * 1.4;
    const experienceIndicatorElements = document.querySelectorAll(".experience__indicator");
    const experienceIndicatorElementsMidPositions = calculateMidPositions(experienceIndicatorElements);

    experienceIndicatorElementsMidPositions.forEach((experienceIndicatorElementMidPosition, i) => {
        if (experienceIndicatorElementMidPosition < localViewportMidThreshold) {
            experienceIndicatorElements[i].classList.add("experience__indicator--active");
        } else {
            experienceIndicatorElements[i].classList.remove("experience__indicator--active");
        }
    });

    // Select header menu items when corresponding section are in view
    localViewportMidThreshold = globalViewportMidThreshold * 0.5;
    const headlineElements = document.querySelectorAll("section h1");
    const headlineElementsMidPositions = calculateMidPositions(headlineElements);
    const menuItemElements = document.querySelectorAll(".main-header .menu__item");

    headlineElementsMidPositions.forEach((headlineElementMidPosition, i) => {
        if (headlineElementMidPosition < localViewportMidThreshold) {
            selectElementWithClass(menuItemElements, menuItemElements[i], "menu__item--active")
        }
    });
}

let ticking = false;
window.addEventListener("scroll", () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            onScroll();
            ticking = false;
        });

        ticking = true;
    }
});

/* Toggle mobile menu */
document.querySelector(".main-header__hamburger").addEventListener("click", () => {
    document.querySelector(".main-header__mobile-menu").classList.toggle("main-header__mobile-menu--active");
});

document.querySelector(".main-header__close").addEventListener("click", () => {
    document.querySelector(".main-header__mobile-menu").classList.toggle("main-header__mobile-menu--active");
});

document.querySelector(".main-header__mobile-menu li:first-child > a").addEventListener("click", () => {
    document.querySelector(".main-header__mobile-menu").classList.toggle("main-header__mobile-menu--active");
});
