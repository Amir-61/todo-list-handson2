import React, {useState, useEffect} from 'react'
// import './TodoCreate.css'

const TodoCreate = ({createTodo}) => {
    const [todoTitle, setTodoTitle] = useState('')
    
    const handleTitleChange = (e) =>{
        const newTitle= e.target.value
        setTodoTitle(newTitle)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        createTodo(todoTitle)
        setTodoTitle('')
    }

    return(
        <form onSubmit={(e)=>handleSubmit(e)} className='todo-item' style={{marginLeft:'50px', marginTop:'50px'}}>
            <input value={todoTitle} onChange={handleTitleChange} ></input>
            <button type="submit">Submit</button>
        </form>
    )
    
}

export default TodoCreate