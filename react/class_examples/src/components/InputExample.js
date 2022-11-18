import { func } from 'prop-types';
import React, { useState } from 'react'

function InputExample() {
//daha kısa şekilde de yazabiliriz.ayrı ayrı state tanımlamak yerine bir tane obje içeren state oluşturduk.
// sonra da bir tane function yazdık.
const [form,setForm]=useState({name:"",surname:""});
const changeInput=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
}
  return (
    <div>
        name
        <br/>
        <input name="name" value={form.name} onChange={changeInput}/>
        <h1>{form.name}</h1>
        <br/>
        <br/>
        surname
        <br/>
        <input name="surname" value={form.surname} onChange={changeInput}/>
         <h1>{form.surname}</h1>
    </div>
  )
  //bu şekilde de yapabilirz
//   const [name,setName]=useState("");
// const [surname,setSurname]=useState("");
//   return (
//     <div>
//         name
//         <br/>
//         <input onChange={(e)=>setName(e.target.value)}/>
//         <h1>{name}</h1>
//         <br/>
//         <br/>
//         surname
//         <br/>
//         <input onChange={(e)=>setSurname(e.target.value)}/>
//          <h1>{surname}</h1>
//     </div>
//   )
}

export default InputExample;