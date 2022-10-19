const formDom=document.querySelector("#myForm");
const todoInput=document.querySelector("#todoInput");
const todoList=document.querySelector("#todoList");
const alertDom=document.querySelector("#alert");
const cardDom=document.querySelector(".card-body");


eventListeners();
function eventListeners(){
  formDom.addEventListener("submit",addTodo);
  //sayfa yenilendiğinde todolar gitmesin diye yazıyoruz
  document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
  cardDom.addEventListener("click",deleteTodo);
}
function deleteTodoFromStorage(deletetodo){
let todos=getTodosFromStorage();
todos.forEach(function(todo,index){
if(todo===deletetodo){
todos.splice(index,1);
}});
localStorage.setItem("todos",JSON.stringify(todos));
}
function deleteTodo(e){
 if(e.target.className==="fa-solid fa-xmark text-dark"){
  e.target.parentElement.parentElement.remove();
  deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
  showAlert("success","Todo başarıyla silindi");
 }
}
function loadAllTodosToUI(){
//storagedan değerleri aldım,ve sayfa yenilenince 
//listeye yazıcak,veriler kaybolmayacak.
  let todos=getTodosFromStorage();
  todos.forEach(function(todo){
    addTodoToUI(todo);
  })
}
function addTodo(e){
  const newTodo=todoInput.value.trim();
  if(!newTodo){
    /**<div class="alert alert-danger" role="alert">
  A simple danger alert—check it out!</div>*/
    showAlert("danger","Lütfen bir todo girin...");
  }else{
    showAlert("success","Başarılı şekilde eklendi...");
    addTodoToUI(newTodo);
    addTodoToStorage(newTodo);
  } 
  e.preventDefault();
}
//storage dan tüm todo ları alır
function getTodosFromStorage(){ 
  let todos;
  if(localStorage.getItem("todos")===null){
    todos=[];
  }else{
    todos=JSON.parse(localStorage.getItem("todos"));
  }
  return todos;
}
function addTodoToStorage(newTodo){
  let todos=getTodosFromStorage();
  todos.push(newTodo);
  localStorage.setItem("todos",JSON.stringify(todos));
}

function addTodoToUI(newTodo){
  const listItem=document.createElement("li");
  listItem.classList.add("list-group-item-secondary", "d-flex", "justify-content-between", "mb-2")
  const link=document.createElement("a");
  link.href="#";
  link.classList.add("delete-item", "mr-1");
  link.innerHTML="<i class='fa-solid fa-xmark text-dark'></i>";
  //yazdığımız text'i li ye eklemiş olduk
  listItem.appendChild(document.createTextNode(newTodo));
  listItem.appendChild(link);
  //todoList'e listItem' ı ekliyoruz (ul ye li ekliyorum)
  todoList.appendChild(listItem);
  todoInput.value="";
  console.log(listItem);
}
function showAlert(type,message){
const alert=document.createElement("div");
alert.className=`alert alert-${type}`;
alert.textContent=message;
alertDom.appendChild(alert);

setTimeout(function(){
  alert.remove();
},2000); 
}



/*<li class="list-group-item-secondary d-flex justify-content-between mb-2">
    Todo 1
    <a href="#" class="delete-item mr-1">
      <i class="fa-solid fa-xmark text-dark"></i>
    </a>
</li> */






