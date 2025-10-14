const TEMPLATE = `<p id="local-time">LOCAL TIME</br>{hour}:{minute} GMT{gmt}</p>`;

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
    TEMPLATE.replace("{hour}", hour < 10 ? `0${hour}` : hour)
      .replace("{minute}", minute < 10 ? `0${minute}` : minute)
      .replace("{gmt}", gmt > 0 ? `+${gmt}` : gmt),
  );

  setTimeout(updateLocalTime, 1000);
}

export { updateLocalTime };
