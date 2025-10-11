import { setup as setupTechnologies } from "./modules/technologies.mjs";

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

  setupTechnologies(option);
});

function onScroll() {
  /* Add header background when scrolling down for the fixed main header */
  if (window.scrollY > 10) {
    $("#header").get(0).classList.add("header-background");
  } else {
    $("#header").get(0).classList.remove("header-background");
  }

  const viewportMid = window.innerHeight / 2;
  const elements = document.querySelectorAll(".experience__indicator");
  const elementsMid = [];
  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const mid = (rect.top + rect.height / 2) * 0.7;
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
