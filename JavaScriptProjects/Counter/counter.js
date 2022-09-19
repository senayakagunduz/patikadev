let counter = localStorage.getItem("counter")
  ? Number(localStorage.getItem("counter"))
  : 0;
let counterDom = document.querySelector("#counter");
let increaseDom = document.querySelector("#increase");
let decreaseDom = document.querySelector("#decrease");

counterDom.innerHTML = counter;

increaseDom.addEventListener("click", clickEvent);
decreaseDom.addEventListener("click", clickEvent);

function clickEvent() {
  console.log(this.id); //this.id ile tıklanan elementin id sini veriyor.
  //   if (this.id == "increase") {
  //     counterDom.innerHTML = counter += 1;
  //   } else {
  //     counterDom.innerHTML = counter -= 1;
  //   }
  this.id == "increase"
    ? // ? (counterDom.innerHTML = counter += 1)
      // : (counterDom.innerHTML = counter -= 1); //ya da
      (counter += 1)
    : (counter -= 1);
  localStorage.setItem("counter", JSON.stringify(counter));
  localStorageInfo = JSON.parse(localStorage.getItem("counter", counter));

  counterDom.innerHTML = counter; //daha kısa şekilde de yazabilirz.
}
