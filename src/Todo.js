import React from 'react'

const Todo = ({title, todo, todos, setTodos}) => {

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id) {
                return {
                    ...item, 
                    completed: !item.completed
                }
            } else {
                return item;
            }
        }))
    }

    return(
        <div className="todo valign-wrapper">
            <p className={`flow-text todo-item ${todo.completed ? "completed" : ''}`}>{title}</p>
            <button onClick={deleteHandler} className="right btn red"><i className="material-icons">delete</i></button>
            <button onClick={completeHandler} className="right btn green"> <i class="material-icons">check</i></button>
        </div>
    )
}

export default Todo;