import React from 'react'

const Form = ({setInputText, todos, setTodos, inputText}) => {

    const updateInput = e => {
        setInputText(e.target.value);
    }

    const submitTodo = e => {
    e.preventDefault();
    setTodos([
      ...todos, {title: inputText, completed: false, id: Math.random()*1000}
    ])
    setInputText('');
  }

    return(
      <div className="container row todo-form">
        <form>
          <input type="text" className='todo-bar' value={inputText} onChange={updateInput}/>
          <button type='submit' onClick={submitTodo} className='todo-button btn-floating waves-light waves-effect btn green'><i className='material-icons'>add</i></button>
        </form>
      </div>
        
    )
}

export default Form;