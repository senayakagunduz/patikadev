import React, { useState,useEffect } from 'react'


function Form({ addContact, contacts}) {
 const initialFormValues={fullname:"", phone_number:""};
  const [form, setForm] = useState(initialFormValues);

  useEffect(()=>{
    setForm(initialFormValues);
  },[contacts])

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }

     addContact([...contacts, form])
    
    console.log(form);

  }
  return (

    <form onSubmit={onSubmit}>

      <div>
        <input name="fullname" value={form.fullname} placeholder="fullname" onChange={onChangeInput} />
      </div>
      <div>
        <input name="phone_number" value={form.phone_number} placeholder="phone number" onChange={onChangeInput} />
      </div>
      <div className='btn'>
        <button>Send</button>
      </div>

    </form>
  );

}

export default Form;