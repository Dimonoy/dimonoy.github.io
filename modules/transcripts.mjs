import { KOREAN_TRANSCRIPT } from "./constants.mjs";


const originalTranscriptCache = new Map();

/**
 * Sets up the language settings based on the provided language code.
 * @param {string} language - The language code to set up.
 */
function setup(language) {
    if (["en", "ko"].find(lang => lang === language) === undefined) {
        throw Error(
            `Invalid language code: ${language}. Choose among 'en' or 'ko'.`,
        );
    }

    let transcript = language === "en" ? originalTranscriptCache : KOREAN_TRANSCRIPT;

    for (let [selector, paragraph] of transcript) {
        const element = document.querySelector(selector);

        if (!originalTranscriptCache.has(selector)) {
            originalTranscriptCache.set(selector, element.innerText);
        }

        element.innerHTML = paragraph;
    }
}

export {
    setup,
};
