const lblS = document.querySelector("#lblS");
const calculateBtn = document.querySelector(".btn");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const form = document.querySelector("#myForm");
eventListeners();

function eventListeners() {
  form.addEventListener("submit", calculateMax);
}
function calculateMax(e) {
  const x = input1.value.trim();
  const y = input2.value.trim();
  if (x > y) {
    return (lblS.innerHTML = `${x} büyüktür`);
  } else {
    return (lblS.innerHTML = `${y} büyüktür`);
  }
  e.preventDefault();
}
