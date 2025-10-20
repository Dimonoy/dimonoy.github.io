/**
 * Dynamically load SVG icons by replacing respective elements with ID with SVG file content.
 * @param {string} name - The name of the SVG icon to load without the file extension.
 * @param {string} id - The ID of the element to replace with the SVG content.
 * @param {string?} classes - The classes to apply to the SVG element.
 */
function loadSvg(name, id, classes) {
    const pathToSvg = `public/icons/${name}.svg`;
    const svgElemId = `#${id}`;

    fetch(pathToSvg)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return response.text();
        })
        .then((svgText) =>
            $(svgElemId).replaceWith(
                `<span class="${classes}" id="${svgElemId.slice(1)}">${svgText}</span>`,
            ),
        )
        .catch((error) => {
            console.error(`Error loading SVG icon '${pathToSvg}':`, error.message);
        });
}

export { loadSvg };
