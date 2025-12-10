import { PROJECTS } from "./constants.mjs";

// Labels: {imgUrl} {title} {description} {link} {index}
const htmlContentTemplate = `
  <div class="projects__slide">
    <div class="projects__slide__content">
      <div class="projects__next-project">&#x0355;</div>
      <div class="projects__prev-project">&#x0354;</div>
      <img src="{imgUrl}" alt="{title}" />
      <div class="projects__slide__info">
        <div class="projects__slide__info__text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <a href="{link}" target="_blank">View Project</a>
      </div>
    </div>
  </div>
`;

const projectIndicatorTemplate = `
  <div class="projects__indicator"></div>
`;

/**
 * Changes the project to display.
 * @param {number} page - Page number.
 */
function updateActiveElements(page) {
    document.querySelectorAll(".projects__slide").forEach((projectSlideElement) => {
        projectSlideElement.classList.remove("projects__slide--active");
    });

    document.querySelectorAll(".projects__indicator--active").forEach((projectIndicatorElement) => {
        projectIndicatorElement.classList.remove("projects__indicator--active");
    });

    document.querySelector(`.projects__slide:nth-child(${page})`).classList.add("projects__slide--active");
    document.querySelector(`.projects__indicator:nth-child(${page})`).classList.add("projects__indicator--active");
}

/**
 * Clears out controls on previous page.
 * @param {number} page - Page number.
 */
function clearControls(page) {
    document.querySelector(`.projects__slide:nth-child(${page}) .projects__prev-project`).classList.remove("projects__control--navigated");
    document.querySelector(`.projects__slide:nth-child(${page}) .projects__next-project`).classList.remove("projects__control--navigated");
}

/**
 * Adds controls on the current page.
 * @param {number} page - Page number.
 * @param {string} type - Type of control (next, prev).
 */
function addControl(page, type) {
    if (type === "next") {
        document.querySelector(`.projects__slide:nth-child(${page}) .projects__next-project`).classList.add("projects__control--navigated");
    } else if (type === "prev") {
        document.querySelector(`.projects__slide:nth-child(${page}) .projects__prev-project`).classList.add("projects__control--navigated");
    }
}

/**
 * Sets project slides content.
 * @param {number} index - The index of the selected project.
 * @returns {number} - Correct index
 */
function setup() {
    PROJECTS.forEach((project, index) => {
        const htmlContent = htmlContentTemplate
            .replace("{imgUrl}", project.imageUrl)
            .replaceAll("{title}", project.title)
            .replace("{description}", project.description)
            .replace("{link}", project.link);
        const page = index + 1;

        document.querySelector(".projects__slide-show").insertAdjacentHTML("beforeend", htmlContent);
        document.querySelector(".projects__indicators").insertAdjacentHTML("beforeend", projectIndicatorTemplate);
        document.querySelector(".projects__indicator:last-child").addEventListener("click", () => updateActiveElements(page));
        document.querySelector(".projects__slide:last-child").addEventListener("click", (event) => {
            const boundary = window.innerWidth / 2;

            if (event.clientX >= boundary && PROJECTS.length !== page) {
                updateActiveElements(page + 1);

                if (PROJECTS.length !== page + 1) {
                    addControl(page + 1, "next");
                }
            } else if (event.clientX < boundary && page !== 1) {
                updateActiveElements(page - 1);

                if (page - 1 !== 1) {
                    addControl(page - 1, "prev");
                }
            }
        });

        document.querySelectorAll(".projects__slide").forEach((projectSlide, index) => projectSlide.addEventListener("mousemove", (event) => {
            const boundary = window.innerWidth / 2;
            const page = index + 1;

            console.log(page);
            if (event.clientX >= boundary && PROJECTS.length !== page && page !== 1) {
                clearControls(page);
                addControl(page, "next");
            } else if (event.clientX < boundary && page !== 1 && page !== PROJECTS.length) {
                clearControls(page);
                addControl(page, "prev");
            } else if (PROJECTS.length === page) {
                addControl(page, "prev");
            } else if (page === 1) {
                addControl(page, "next");
            }
        }));

        document.querySelectorAll(".projects__slide").forEach((projectSlide, index) => projectSlide.addEventListener("mouseleave", () => {
            const page = index + 1;

            clearControls(page);
        }));
    });

    document.querySelector(".projects__slide:first-child").classList.add("projects__slide--active");
    document.querySelector(".projects__indicator:first-child").classList.add("projects__indicator--active");
}

export { setup };
