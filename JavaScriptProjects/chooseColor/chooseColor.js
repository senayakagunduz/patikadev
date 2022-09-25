const colorForm=document.querySelector("#select");
const ul=document.querySelector("ul");
const colorInput=document.querySelector("#select");

colorForm.addEventListener("change",selectBox);

function selectBox(e){
    e.preventDefault();
    if(e.target.value=="pink"){
       document.body.style.background="pink"
    }else if(e.target.value=="red"){
        document.body.style.background="red"
    }else if(e.target.value=="orange"){
        document.body.style.background="orange"
    }
    else if(e.target.value=="blue"){
        document.body.style.background="#5DADE2 "
    }else if(e.target.value=="purple"){
        document.body.style.background="purple"
    }
    else{
        document.body.style.background="rgb(117, 42, 42)"
    }
console.log("Etkinlik tipi: " + e.type);
console.log("Deger: " + e.target.value);
}

