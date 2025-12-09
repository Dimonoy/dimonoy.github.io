const projects = [
    {
        imageUrl: "../public/images/placeholder-16-9.png",
        title: "Project 1",
        description: "Upcoming...",
        link: "http://localhost:8000/",
    },
    {
        imageUrl: "../public/images/placeholder-16-9.png",
        title: "Project 2",
        description: "Upcoming...",
        link: "http://localhost:8000/",
    },
    {
        imageUrl: "../public/images/placeholder-16-9.png",
        title: "Project 3",
        description: "Upcoming...",
        link: "http://localhost:8000/",
    },
    {
        imageUrl: "../public/images/placeholder-16-9.png",
        title: "Project 4",
        description: "Upcoming...",
        link: "http://localhost:8000/",
    },
];

// Labels: {imgUrl} {title} {description} {link} {index}
const htmlContentTemplate = `
  <div class="projects__slide">
    <div class="projects__slide__content">
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
 * Sets project slides content.
 * @param {number} index - The index of the selected project.
 * @returns {number} - Correct index
 */
function setup() {
    projects.forEach((project, index) => {
        const htmlContent = htmlContentTemplate
            .replace("{imgUrl}", project.imageUrl)
            .replaceAll("{title}", project.title)
            .replace("{description}", project.description)
            .replace("{link}", project.link);

        document.querySelector(".projects__slide-show").insertAdjacentHTML("beforeend", htmlContent);
        document.querySelector(".projects__indicators").insertAdjacentHTML("beforeend", projectIndicatorTemplate);
        document.querySelector(".projects__indicator:last-child").addEventListener("click", () => updateActiveElements(index + 1));
        document.querySelector(".projects__slide:last-child").addEventListener("click", (event) => {
            const boundary = window.innerWidth / 2;

            if (event.clientX >= boundary && projects.length - 1 !== index) {
                updateActiveElements(index + 2);
            } else if (event.clientX < boundary && index !== 0) {
                updateActiveElements(index);
            }
        })
    });

    document.querySelector(".projects__slide:first-child").classList.add("projects__slide--active");
    document.querySelector(".projects__indicator:first-child").classList.add("projects__indicator--active");
}

export { setup };
