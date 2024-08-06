import TodoItem from "../TodoItem/TodoItem"

const TodoList = ({todos, toggleTodo}) => {
    return (
        <ul style={{listStyleType: 'none'}}>
        {    todos.map((todo)=>(
                <li key={todo.id}>
                    <TodoItem  todo={todo} toggleTodo={toggleTodo}/>
                </li>
            ))}
        </ul>
    )

}

export default TodoList