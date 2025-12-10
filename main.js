import { updateLocalTime, updateAge, updateExperience } from "./modules/time.mjs";


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
document.querySelectorAll(".main-header .menu__item").forEach((menuItem) => {
    menuItem.addEventListener("click", (event) => {
        for (const menuItem of document.querySelectorAll(".main-header .menu__item")) {
            menuItem.classList.remove("menu__item--active");
        }
        event.target.parentNode.classList.add("menu__item--active");
    })
});

function onScroll() {
    /* Add header background when scrolling down for the fixed main header */
    const mainHeader = document.getElementById("main-header");

    console.log(window.scrollY);
    if (window.scrollY > 10) {
        mainHeader.classList.add("main-header-background");
    } else {
        mainHeader.classList.remove("main-header-background");
    }

    const viewportMid = (window.innerHeight / 2) * 1.4;
    const elements = document.querySelectorAll(".experience__indicator");
    const elementsMid = [];
    elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const mid = rect.top + rect.height / 2;
        elementsMid.push(mid);
    });

    elementsMid.forEach((elementMid, i) => {
        if (elementMid < viewportMid) {
            elements[i].classList.add("experience__indicator--active");
        } else {
            elements[i].classList.remove("experience__indicator--active");
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
