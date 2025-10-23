import { setup as setupTechnologies } from "./modules/technologies.mjs";
import { updateLocalTime } from "./modules/time.mjs";


/* Run local-time clock */
{
    updateLocalTime();


}

/* Resets active styles for menu elements */
$("#header .menu__item").click((event) => {
    $("#header .menu__item").removeClass("menu__item--active");
    event.target.parentNode.classList.add("menu__item--active");
});

/* Toggles between different technology categories */
$("#toolbox .menu__item").click((event) => {
$("#toolbox .menu__item").removeClass("menu__item--active");
event.target.parentNode.classList.add("menu__item--active");

const option = event.target.parentNode.dataset.option;

if (
    ($("body").hasClass("dark") ||
        window.matchMedia("(prefers-color-scheme: dark)").matches) &&
    !$("body").hasClass("light")
) {
    setupTechnologies(option, "-light");
} else {
    setupTechnologies(option);
}
});

function onScroll() {
    /* Add header background when scrolling down for the fixed main header */
    if (window.scrollY > 10) {
        $("#main-header").get(0).classList.add("main-header-background");
    } else {
        $("#main-header").get(0).classList.remove("main-header-background");
    }

    const viewportMid = (window.innerHeight / 2) * 1.8;
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
$(".main-header__hamburger").click(() => {
    $(".main-header__mobile-menu").toggleClass("main-header__mobile-menu--active");
});

$(".main-header__close").click(() => {
    $(".main-header__mobile-menu").toggleClass("main-header__mobile-menu--active");
});

$(".main-header__mobile-menu li:first-child > a").click((e) => {
    $(".main-header__mobile-menu").toggleClass("main-header__mobile-menu--active");
});
