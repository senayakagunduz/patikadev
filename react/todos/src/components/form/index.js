import React, { useState, useEffect } from 'react'
import "./style.css";

function Form({ addTodo, todos }) {
  const initialFormValues = { text: "" }
  const [form, setForm] = useState({initialFormValues});
  const [done, setDone] = useState(false);


  useEffect(() => {
    setForm(initialFormValues);
  }, [todos]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.text === "") {
      return false;
    }

    addTodo([...todos, form])
    console.log(form);
  }
  return (

    <form className='form ' onSubmit={onSubmit}>
      <section className='main'>
        <div className='form-group'>
          <input name='text' className='form-control' value={form.text} placeholder='What needs to be done?' onChange={onChangeInput} />
        </div>
        <div>
          <ul className='list'>
            {
              todos.map((todo, index) => {
                return (
                  <li key={index} typeof="radio">{todo.text}</li>
                )
              })
            }
          </ul>
        </div>
      </section>
    </form>



  )
}

export default Form