const technologies = {
  web: [
    { title: "React", iconName: "React" },
    { title: "TypeScript", iconName: "TypeScript" },
    { title: "NextJS", iconName: "NextJS" },
    { title: "TailwindCSS", iconName: "TailwindCSS" },
    { title: "Django", iconName: "Django" },
    { title: "Git", iconName: "Git" },
    { title: "GCP", iconName: "GCP" },
    { title: "Python", iconName: "Python" },
    { title: "MySQL", iconName: "MySQL" },
    { title: "Docker", iconName: "Docker" },
  ],
  data: [
    { title: "SQL", iconName: "React" },
    { title: "PyTorch", iconName: "PyTorch" },
    { title: "Sklearn", iconName: "Sklearn" },
    { title: "OpenCV", iconName: "OpenCV" },
    { title: "Tableau", iconName: "Tableau" },
    { title: "FastAPI", iconName: "FastAPI" },
    { title: "Git", iconName: "Git" },
    { title: "Apache", iconName: "Apache" },
    { title: "Python", iconName: "Python" },
    { title: "A/B test", iconName: "AB" },
  ],
};

/**
 * Sets the toolbox contents with the specified technology list.
 * @param {string} option - The technology list to display.
 */
function setup(option) {
  $("#toolbox-cards").empty();

  technologies[option].forEach((technology) => {
    const element = document.createElement("div");
    element.classList.add("toolbox__card");
    element.innerHTML = `
      <img src="public/icons/${technology.iconName}-light.svg" alt="${technology.title} icon" />
      <div class="toolbox__card__text">
        <h3>${technology.title}</h3>
      </div>
    `;
    $("#toolbox-cards").append(element);
  });
}

export { setup };
