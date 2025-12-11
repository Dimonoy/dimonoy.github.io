/** Calculates vertical positions of elements.
 * @param elements {[HTMLElement]} - HTML elements.
 * @returns {[number]} - Mid positions.
 */
export function calculateMidPositions(elements) {
    const midPositions = [];

    elements.forEach((element) => {
        const elementRect = element.getBoundingClientRect();
        const elementMidPosition = elementRect.top + elementRect.height / 2;
        midPositions.push(elementMidPosition);
    });

    return midPositions;
}

/** Add class indicating active state to the element and clean from the class other elements.
 * @param elementsToClean {[HTMLElement]} - Elements to remove the class from.
 * @param targetElement {HTMLElement} - Element to add the class to.
 * @param targetElementClass {string} - Class indicating active state.
 */
export function selectElementWithClass(elementsToClean, targetElement, targetElementClass) {
    elementsToClean.forEach((element) => {
        element.classList.remove(targetElementClass);
    });
    targetElement.classList.add(targetElementClass);
}
