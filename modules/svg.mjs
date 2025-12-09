/**
 * Dynamically load SVG icons by replacing respective elements with ID with SVG file content.
 * @param {string} name - The name of the SVG icon to load without the file extension.
 * @param {string} id - The ID of the element to replace with the SVG content.
 * @param {Function?} eventCallback - anonymous function to attach to event listener of the svg
 */
function loadSvg(name, id, eventCallback) {
    const pathToSvg = `public/icons/${name}.svg`;
    const svgElementId = id;

    fetch(pathToSvg)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return response.text();
        })
        .then((svgText) => {
            let svgElement = document.getElementById(svgElementId);

            svgElement.outerHTML =
                `<span id="${svgElementId}">${svgText}</span>`;

            svgElement = document.getElementById(svgElementId);

            if (eventCallback) {
                svgElement.addEventListener("click", eventCallback);
            }
        })
        .catch((error) => {
            console.error(`Error loading SVG icon '${pathToSvg}':`, error.message);
        });
}

export { loadSvg };
