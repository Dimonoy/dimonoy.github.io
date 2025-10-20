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
        { title: "SQL", iconName: "SQL" },
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

// Labels: {iconName} {title}
const htmlContent = `
  <img src="public/icons/{iconName}.svg" alt="{title} icon" />
  <p>{title}</p>
`;

/**
 * Sets the toolbox contents with the specified technology list.
 * @param {string} option - The technology list to display.
 * @param {string?} suffix - Icon suffix for different icon variation.
 */
function setup(option, suffix) {
    $("#toolbox-cards").empty();

    technologies[option].forEach((technology) => {
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
        $("#toolbox-cards").append(element);
    });
}

export { setup };
