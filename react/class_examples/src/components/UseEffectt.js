import React, { useEffect, useState } from 'react'

function UseEffectt() {
  const [number,setNumber]=useState(0);
  const [name,setName]=useState("Beyza");

  useEffect(()=>{
    console.log("Componenet mount edildi");
    const interval=setInterval(() => {
      setNumber((n)=>n+1);
    }, 1000);
    return clearInterval(interval);
  },[]);

  useEffect(()=>{
    console.log("name state yakalandı");
  },[name]);

  useEffect(()=>{
    console.log("number state yakalandı");
  },[number]);
  return (
    <div>
        <h1>UseEffect kullanımı</h1>
        <h1>{number}</h1>
        <button onClick={()=>setNumber(number +1)}>artır</button>
        <br/>
        <hr/>
        <h1>{name}</h1>
        <button onClick={()=>setName("Ayşe")}>change the name</button>
        <br/>
        <hr/>
        
    </div>
  )
}

export default UseEffectt;