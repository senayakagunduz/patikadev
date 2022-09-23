const userFormDom = document.querySelector("#userForm");
userFormDom.addEventListener("submit", formHandler);
const alertDOM = document.querySelector('#alert')

const alertFunction = (title,message, className="warning") => `<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}!</strong> ${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`

function formHandler(e) {
    e.preventDefault();
    const USER_NAME = document.querySelector("#username");
    const LAST_NAME = document.querySelector("#lastname");
    const AGE = document.querySelector("#age");
    
    if (USER_NAME.value && LAST_NAME.value && AGE.value && AGE.value>=18) {
        addItems(USER_NAME.value, LAST_NAME.value, AGE.value); 
        USER_NAME.value = "";
        LAST_NAME.value = "";
        AGE.value = "";
        alertDOM.innerHTML =  alertFunction("Bilgi","Giriş Başarılı.","success")
    } else {
        alertDOM.innerHTML =  alertFunction("Hata","Eksik Bilgi Girdiniz yada 18 Yaşından Küçüksünüz","danger")
           }
}
/**<li class="list-group-item d-flex justify-content-between align-items-center">A list item
<span class="badge badge-primary badge-pill">14</span></li> */
let userListDom = document.querySelector("#userList");
const addItems = (username, lastname, age) => {
    let liDom = document.createElement('li');
    liDom.innerHTML = `<strong>${username} ${lastname} </strong> <strong>${age}</strong> `
    liDom.classList.add('list-group-item' , 'd-flex' , 'justify-content-between' , 'align-items-center')
    userListDom.appendChild(liDom);
}