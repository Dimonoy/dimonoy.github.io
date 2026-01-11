// ----- MENU -----
const mobileButtonElement = document.getElementById("hamburger");
const mobileMenuElement = document.getElementById("hamburger-menu");

mobileButtonElement.addEventListener("click", () => {
  mobileButtonElement.classList.toggle("main-header__hamburger--active");
  mobileMenuElement.classList.toggle("main-header__hamburger-menu--active");
});

// ----- I18N -----
function translate(translations, targetLanguage) {
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    element.innerHTML = translations[targetLanguage][key];
  });
}
(async function() {
  const languageToggler = document.querySelector(".main-header__language-toggle");
  const translations = {
    en: await fetch('locale/en.json').then(r => r.json()),
    kr: await fetch('locale/kr.json').then(r => r.json()),
  };
  let currentLanguage = localStorage.getItem("lang") ?? "en";

  if (currentLanguage !== "en") {
    translate(translations, currentLanguage);
    languageToggler.querySelectorAll("*").forEach(element => {
      element.classList.toggle("main-header__language-toggle__item--active");
    });
  }

  languageToggler.addEventListener("click", () => {
    currentLanguage = currentLanguage === "en" ? "kr" : "en";

    translate(translations, currentLanguage);

    languageToggler.querySelectorAll("*").forEach(element => {
      element.classList.toggle("main-header__language-toggle__item--active");
    });

    localStorage.setItem("lang", currentLanguage);
  });
})();

