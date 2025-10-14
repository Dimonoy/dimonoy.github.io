import { loadSvg } from "./modules/svg.mjs";
import { setup as setupTechnologies } from "./modules/technologies.mjs";
import { setup as setupProjects } from "./modules/projects.mjs";
import hiddenElementsToShow from "./modules/target_animation_elements.mjs";
import { setup as setupLanguage } from "./modules/transcripts.mjs";

// Load SVG icons
{
  loadSvg("Lightbulb", "svg-lightbulb");
  loadSvg("Language", "svg-language");
  loadSvg("Github", "svg-github");
  loadSvg("LinkedIn", "svg-linkedin");
  loadSvg("Gmail", "svg-email");
  loadSvg("VK", "svg-vk");
  loadSvg("LinkedIn-inverse", "svg-linkedin-2");
  loadSvg("Telegram", "svg-telegram");

  loadSvg(
    "Arrow-left",
    "slide-show__arrow-left",
    "projects__slide-show__arrow-left",
  );
  loadSvg(
    "Arrow-right",
    "slide-show__arrow-right",
    "projects__slide-show__arrow-right",
  );
}

// Set language
{
  $("html").get(0).lang = "en";
}

let projectIndex = 0;

// Initialize technologies and projects
{
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    setupTechnologies("web", "-light");
  } else {
    setupTechnologies("web");
  }
  projectIndex = setupProjects(projectIndex);
}

$(document).on("click", "#slide-show__arrow-left", function () {
  projectIndex = setupProjects(projectIndex - 1);
});

$(document).on("click", "#slide-show__arrow-right", function () {
  projectIndex = setupProjects(projectIndex + 1);
});

// Toggle theme
$(document).on("click", "#svg-lightbulb", () => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    $("body").toggleClass("light");

    if ($("body").hasClass("light")) {
      setupTechnologies("web");
    } else {
      setupTechnologies("web", "-light");
    }
  } else {
    $("body").toggleClass("dark");

    if ($("body").hasClass("dark")) {
      setupTechnologies("web", "-light");
    } else {
      setupTechnologies("web");
    }
  }
});

let language = null;
$(document).on("click", "#svg-language", () => {
  language = $("html").attr("lang");

  language = language === "ko" ? "en" : "ko";
  $("html").attr("lang", language);

  setupLanguage(language);
});

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
