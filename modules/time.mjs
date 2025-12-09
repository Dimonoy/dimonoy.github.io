const TEMPLATE_LOCAL_TIME = "LOCAL TIME</br>{hour}:{minute} GMT{gmt}";
const TEMPLATE_AGE = "{age} years old";
const TEMPLATE_EXPERIENCE = "{nYears} years experience (non-working)";
const MY_BIRTH_DATE = new Date("2003-12-23T00:00:00");
const CODING_START_DATE = new Date("2020-01-01T00:00:00");

let previousMinute = null;

function updateLocalTime() {
    const now = new Date();
    const minute = now.getMinutes();

    if (minute === previousMinute) {
        setTimeout(updateLocalTime, 1000);
        return;
    }
    previousMinute = minute;

    const hour = now.getHours();
    const gmt = -now.getTimezoneOffset() / 60;

    const localTimeElement = document.getElementById("local-time");

    localTimeElement.innerHTML = TEMPLATE_LOCAL_TIME
        .replace("{hour}", hour < 10 ? `0${hour}` : hour)
        .replace("{minute}", minute < 10 ? `0${minute}` : minute)
        .replace("{gmt}", gmt > 0 ? `+${gmt}` : gmt);

    setTimeout(updateLocalTime, 1000);
}

function updateAge() {
    const now = new Date();

    const dayDifference = now.getDate() - MY_BIRTH_DATE.getDate();
    const monthDifference = now.getMonth() - MY_BIRTH_DATE.getMonth();

    let age = now.getFullYear() - MY_BIRTH_DATE.getFullYear();

    if (dayDifference < 0 && monthDifference < 0) {
        age = age - 1;
    }

    const ageElement = document.getElementById("age");
    ageElement.innerText = TEMPLATE_AGE.replace("{age}", age);
}

function updateExperience() {
    const now = new Date();

    const yearDifference = now.getYear() - CODING_START_DATE.getYear();

    const experienceElement = document.getElementById("experience-non-working");
    experienceElement.innerText = TEMPLATE_EXPERIENCE.replace("{nYears}", yearDifference);
}

export { updateLocalTime, updateAge, updateExperience };
