import React, { useEffect, useState } from 'react'
import List from './list'
import Form from './form'
import "./style.css";

function Contacts() {
const [contacts,setContacts]=useState([
  {fullname:'Şenay', phone_number:123456},
  {fullname:"Mehmet",phone_number:123},
  {fullname:"Ali",phone_number:321},
  {fullname:"mehmet",phone_number:123}
]);

useEffect(()=>{
    console.log(contacts);
},[contacts]);

  return (
    <div id='container'>
      <h1>Contacts</h1>
        <List contacts={contacts}/>
        <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts