// ----- TIME -----
const yearsExperienceElement = document.getElementById("years-experience");
const ageElement = document.getElementById("age");
const now = new Date();
const birthday = new Date(2003, 12, 23);

yearsExperienceElement.innerText = `${now.getYear() - (new Date(2020, 1, 1)).getYear()} years experience (non-working)`;

let age = now.getFullYear() - birthday.getFullYear() + 1;
if (now.getDate() - birthday.getDate() < 0 && now.getMonth() - birthday.getMonth()) {
  age = age - 1;
}

ageElement.innerText = `${age} years old`;

// ----- TECH -----
const technologiesBlock = document.querySelector(".hero__technologies");
const technologyCardElementTemplate = '<div class="technology-card">{svgTag}<span>{techTitle}</span></div>';
const technologies = [
  { name: "Django", path: "./public/icons/Django.svg" },
  { name: "FastAPI", path: "./public/icons/FastAPI.svg" },
  { name: "Docker", path: "./public/icons/Docker.svg" },
  { name: "Git", path: "./public/icons/Git.svg" },
  { name: "GCP", path: "./public/icons/GCP.svg" },
  { name: "MySQL", path: "./public/icons/MySQL.svg" },
  { name: "OpenCV", path: "./public/icons/OpenCV.svg" },
  { name: "Python", path: "./public/icons/Python.svg" },
  { name: "PyTorch", path: "./public/icons/PyTorch.svg" },
  { name: "Sklearn", path: "./public/icons/Sklearn.svg" },
];

(async function() {
  for (let { name: techonologyName, path: technologySvgPath } of technologies) {
    await fetch(technologySvgPath).then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response.text();
    }).then(svgText => {
      technologiesBlock.insertAdjacentHTML('beforeend', technologyCardElementTemplate.replace("{svgTag}", svgText).replace("{techTitle}", techonologyName));
    }).catch(error => {
      console.error(`Error loading SVG icon '${technologySvgPath}':`, error.message);
    });
  }
})();
