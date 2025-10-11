import { loadSvg } from "./modules/svg.mjs";
import { setup as setupTechnologies } from "./modules/technologies.mjs";
import hiddenElementsToShow from "./modules/target_animation_elements.mjs";

// Load SVG icons
{
  loadSvg("Lightbulb", "svg-lightbulb");
  loadSvg("Language", "svg-language");
  loadSvg("Github", "svg-github");
  loadSvg("LinkedIn", "svg-linkedin");
  loadSvg("Gmail", "svg-email");
  loadSvg("VK", "svg-vk");
  loadSvg("LinkedIn", "svg-linkedin-2");
  loadSvg("Kakaotalk", "svg-kakaotalk");
  loadSvg("Telegram", "svg-telegram");

  loadSvg("Arrow-left", "slide-show-arrow-left");
  loadSvg("Arrow-right", "slide-show-arrow-right");
}

// Initialize technologies
{
  setupTechnologies("web");
}

/**
 * Check if the browser is Chrome
 * @returns {boolean} - True if the browser is Chrome, false otherwise
 */
function isChrome() {
  const ua = navigator.userAgent.toLowerCase();
  return ua.includes("chrome") && !ua.includes("edg") && !ua.includes("opr");
}

// Redefine :root properties based on browser
{
  if (isChrome()) {
    const root = document.documentElement;

    root.style.setProperty(
      "--drop-shadow-header",
      "drop-shadow(0 0 16px var(--primary-foreground-color))",
    );
  }
}

const wasStartupAnimationPlayed = sessionStorage.getItem(
  "was-startup-animation-played",
);

if (wasStartupAnimationPlayed === null) {
  hiddenElementsToShow.forEach((element) => element.classList.add("hidden"));

  const initialTimeoutMS = 500;
  const defaultTimeoutMSIncrement = 300;

  let currentTimeoutMS = initialTimeoutMS;
  let timeoutMSIncrements = Array(hiddenElementsToShow.length - 1).fill(
    defaultTimeoutMSIncrement,
  );
  timeoutMSIncrements[0] = 500;

  hiddenElementsToShow.forEach((element, i) => {
    setTimeout(() => {
      element.classList.add("shown");
    }, currentTimeoutMS);

    currentTimeoutMS += timeoutMSIncrements[i];
  });

  sessionStorage.setItem("was-startup-animation-played", true);
}
