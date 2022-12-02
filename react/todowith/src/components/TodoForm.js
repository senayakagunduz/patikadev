import React,{useState} from 'react'

function TodoForm(props) {
    const [input,setInput]=useState();

    
    const handleChange=(e)=>{
        setInput(e.target.value);
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.onSubmit({
            id:Math.floor(Math.random()*1000),
            text:input
        })
       setInput('');  
    }


  return (
    <form className='todo-form' onSubmit={onSubmit}>
        <input type='text'
        name='text'
        value={input}
        onChange={handleChange}
        placeholder="what do you want to do"
        className='todo-input'/>
        <button className='todo-button'>add todo</button>
    </form>
  )
}

export default TodoForm