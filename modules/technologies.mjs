import { TECHNOLOGIES } from "./constants.mjs";

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

    TECHNOLOGIES.forEach((technology) => {
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
