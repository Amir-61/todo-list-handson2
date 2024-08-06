import './TodoItem.css'

const TodoItem = ({todo, toggleTodo}) => {
    const {id, title, completed} = todo
    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={completed}
                onClick={() => {
                    toggleTodo(id)
                }}
            />
            <p>{`${id} ${title}`}</p>
        </div>
    )
}

export default TodoItem