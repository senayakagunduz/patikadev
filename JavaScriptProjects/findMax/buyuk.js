const formDom = document.querySelector("#myForm");
formDom.addEventListener("submit", calculateMax);

function calculateMax(e) {
  e.preventDefault();
  const firstInput = document.querySelector("#input1");
  const secondInput = document.querySelector("#input2");

    if(firstInput.value && secondInput.value){
        if (firstInput.value > secondInput.value) { 
           addItems(firstInput.value);  
        } 
        else if(secondInput.value>firstInput.value){ 
           addItems(secondInput.value);
        }else{
          addItems(`${firstInput.value} and ${secondInput.value} are equals`)
        }
    }else{
      alert("unvalid values");
    }
}

let userListDom=document.querySelector("#userList");
const addItems = (x,y)=>{
  let liDom=document.createElement('li');
  liDom.innerHTML=`max number is ${x},${y}`;
  liDom.classList.add("list-group-item","mt-3");
  userListDom.append(liDom);
  

}
