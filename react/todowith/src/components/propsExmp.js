import React, { useState } from 'react'

export default function PropsExmp() {
  return (
    <div>
        <h1>React Dersleri, <IsimGoster isim="Veli" link="/veli"/></h1>
        <Selam isim="Şenay" link="/şenay"><h1>Props.children buradan geliyor</h1></Selam>
    </div>
    
  )
}
function Selam(props){
    const [text,setText]=useState("Random title");

    const handleClick=()=>{
         setText("Selam");
    }

  return (
    <div>
        <p>Hoşgeldiniz, <IsimGoster isim={props.isim} link={props.link}/></p>
        {props.children}
        <h1>{text}</h1>
        <button onClick={handleClick}>change header</button>
    </div>
    
  );
}
function IsimGoster(props){
    return <a href={props.link}>{props.isim || "misafir"}</a>
}
    
