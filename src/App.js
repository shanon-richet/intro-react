import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const initial = [{
    "task": "Eat",
    "complete": false
  }, {
    "task": "Sleep",
    "complete": true
  }]
  const [todos, setTodos] = React.useState(initial)
  const inputRef = useRef()
  const todoRef = useRef()
  const todoInput = useRef()

  function clickHandler(e) {
    e.preventDefault()
    setTodos(previous => {
      return [...previous, {
        "task": inputRef.current.value,
        "complete": false
      }]
    })
    console.log(todos)
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  React.useEffect(() => {
    const stored = localStorage.getItem('todos')
    if (stored) {
      setTodos(JSON.parse(stored))
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  })

  return (
    <>
      <main>
        <h1>TodoList</h1>
        <form>
          <input ref={inputRef} placeholder="write todo" type="text" />
          <button onClick={(e) => (clickHandler(e))} >add</button>
        </form>
        <div className='todos'>
          <ul>
            {
              todos.map((todo, index) => (
                <li ref={todoRef}>
                  <button onClick={(e) => removeTodo(e)}>X</button>
                  <input ref={todoInput} key={index} type="checkbox" defaultChecked={todo.complete} /> {todo.task}
                </li>
              ))}
          </ul>
        </div>
      </main>
    </>
  )
}
export default App;
