const username = prompt("Please enter the time");
const user = document.querySelector("#name");
user.innerHTML = username;

setInterval(() => {
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  const weekDay = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  let day = weekDay[date.getDay()];
  const time = document.querySelector("#time");
  time.innerHTML = `${hour}:${minutes}:${seconds} ${day}`;
}, 1000);
