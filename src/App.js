import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  const initial = ['Eat', 'Sleep']
  const [todos, setTodos] = useState(initial)

  const inputRef = useRef();

  function clickHandler(e) {
    e.preventDefault()
    setTodos([...initial, inputRef.current.value])
    console.log(todos)
  }

  useEffect(() => {
    // storing input name
    localStorage.setItem("name", JSON.stringify(todos));
  }, [todos]);

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
                <input key={index} type="checkbox" /> {todo}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
export default App;
