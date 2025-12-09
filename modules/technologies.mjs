const technologies = [
    { title: "React", iconName: "React" },
    { title: "TypeScript", iconName: "TypeScript" },
    { title: "NextJS", iconName: "NextJS" },
    { title: "TailwindCSS", iconName: "TailwindCSS" },
    { title: "Django", iconName: "Django" },
    { title: "Git", iconName: "Git" },
    { title: "GCP", iconName: "GCP" },
    { title: "MySQL", iconName: "MySQL" },
    { title: "Docker", iconName: "Docker" },
    { title: "SQL", iconName: "SQL" },
    { title: "PyTorch", iconName: "PyTorch" },
    { title: "Sklearn", iconName: "Sklearn" },
    { title: "OpenCV", iconName: "OpenCV" },
    { title: "Tableau", iconName: "Tableau" },
    { title: "FastAPI", iconName: "FastAPI" },
    { title: "Apache", iconName: "Apache" },
    { title: "Python", iconName: "Python" },
    { title: "A/B test", iconName: "AB" },
];

// Labels: {iconName} {title}
const htmlContent = `
  <img src="public/icons/{iconName}.svg" alt="{title} icon" />
  <p>{title}</p>
`;

/**
 * Sets the toolbox contents with the specified technology list.
 * @param {string?} suffix - Icon suffix for different icon variation.
 */
function setup(suffix) {
    const toolboxCards = document.getElementById("toolbox-cards");
    toolboxCards.innerHTML = "";

    technologies.forEach((technology) => {
        const element = document.createElement("div");

        element.classList.add("toolbox__card");
        element.innerHTML = htmlContent
            .replace(
                "{iconName}",
                suffix !== undefined
                    ? `${technology.iconName}${suffix}`
                    : technology.iconName,
            )
            .replaceAll("{title}", technology.title);
        toolboxCards.appendChild(element);
    });
}

export { setup };
