const TEMPLATE_LOCAL_TIME = `<p id="local-time">LOCAL TIME</br>{hour}:{minute} GMT{gmt}</p>`;
const TEMPLATE_AGE = `<p id="age">{age} years old</p>`;
const MY_BIRTH_DATE = new Date("2003-12-23T00:00:00");

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

    $("#local-time").replaceWith(
        TEMPLATE_LOCAL_TIME.replace("{hour}", hour < 10 ? `0${hour}` : hour)
            .replace("{minute}", minute < 10 ? `0${minute}` : minute)
            .replace("{gmt}", gmt > 0 ? `+${gmt}` : gmt),
    );

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

    $("#age").replaceWith(
        TEMPLATE_AGE.replace("{age}", age)
    );
}

export { updateLocalTime, updateAge };
