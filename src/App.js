import './App.css';
import React, {useState} from 'react'
import Form from './Form'
import TodoList from './TodoList'

function App() {

  let d = new Date();
  let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');


  return (
    <div className="App">
      <div className="todo-app row container">
        <div className="date-layout container">
          <div className="col s6 push-s2 m6 push-m2 xl2 date">
            <h1>{d.getDate()}</h1>
          </div>
          <div className="col s6 pull-s1 m6 pull-m2 xl2 date-month">
            <h5>{months[d.getMonth()]}</h5>
            <h5>{d.getFullYear()}</h5>
          </div>
          <div className="col s12 m12 xl8 date-day">
            <h3>{days[d.getDay()]}</h3>
          </div>
        </div>
        <div className='white-app'>
          <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
          <TodoList setTodos={setTodos} todos={todos}/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
