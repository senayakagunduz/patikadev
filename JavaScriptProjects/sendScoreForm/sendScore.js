let userFormDom = document.querySelector("#userForm");
let userListDom = document.querySelector("#userList");

const USER_NAME = document.querySelector("#username");
const SCORE = document.querySelector("#score");

const alertDom = document.querySelector('#alert');
const alertFunction = (message, className = "warning") => `<div class="alert alert-${className}" role="alert">
${message}
</div>`
userFormDom.addEventListener("submit", formHandler);

function formHandler(e) {
  e.preventDefault();
  if (USER_NAME.value, SCORE.value) {
    addItem(USER_NAME.value, SCORE.value);
    USER_NAME.value = "";
    SCORE.value = "";
  } else {
    
  }
}
//<li class="list-group-item mb-3">A second item</li>
const addItem = (username, score) => {
  let liDom = document.createElement('li');
  liDom.innerHTML = `${username},${score}`;
  liDom.classList.add("list-group-item", "mb-3");
  userListDom.appendChild(liDom);
}


