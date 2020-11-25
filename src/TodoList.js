import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, setTodos}) => {
    return(
        <div className="todo-list">   
          {todos.map((todo) => (
            <Todo 
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            key = {todo.id}
            title = {todo.title}
             />
          ))}
        </div>
    )
}

export default TodoList;