import React, { useState, useEffect,useRef } from 'react'
import Footer from './footer'

function TodoForm(props) {
    const [input, setInput] = useState('');

    const inputRef= useRef(null)

    useEffect(()=>{
        inputRef.current.focus()
    })

    const handleChange=e=>{
        setInput(e.target.value);
    };
    const handletSubmit= e=>{
    e.preventDefault();

   props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
   
    });
   setInput('');
    
    };

    return (
        <form className="todo-form" onSubmit={handletSubmit} >
            <input 
            type="text" 
            autocomplete="off"
            placeholder="Agregar a la lista" 
            value={input} name="text" 
            className="todo-input"
            onChange={handleChange} 
            ref={inputRef}/>
            
            <button className="todo-button">Agregar</button>



           

        </form>
       
            
        
    )
}

export default TodoForm
