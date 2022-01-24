import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  const initial = [{
    "task": "Eat",
    "complete": false
  }, {
    "task": "Sleep",
    "complete": true
  }]
  const [todos, setTodos] = useState(initial)

  const inputRef = useRef();

  function clickHandler(e) {
    e.preventDefault()

    setTodos(previous => {
      return [...previous, {
        "task": inputRef.current.value,
        "complete": false
      }]
    })
    console.log(todos)
  }
  return (
    <>
      <h1>TodoList</h1>
      <form>
        <input ref={inputRef} placeholder="write todo" type="text" />
        <button onClick={(e) => (clickHandler(e))} >add</button>
      </form>
      <TodoList />
      <div>
        <ul>
          {
            todos.map((todo, index) => (
              <li>
                <input key={index} type="checkbox" defaultChecked={todo.complete} /> {todo.task}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
export default App;
