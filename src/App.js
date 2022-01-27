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

  const removeTodo = (todo, e) => {
    e.target.parentNode.remove()
    const ls = JSON.parse(localStorage.getItem('todos'))
    const filtered = ls.filter(element => element.task !== todo.task)
    localStorage.removeItem('todos')
    localStorage.setItem('todos', JSON.stringify(filtered))
    console.log(filtered)
  }
  return (
    <>
      <main>
        <h1>TodoList</h1>
        <form>
          <input ref={inputRef} placeholder="write todo" type="text" class="todoInput" />
          <button onClick={(e) => (clickHandler(e))} >add</button>
        </form>
        <div className='todos'>
          <ul>
            {
              todos.map((todo, index) => (
                <li>
                  <button class="trash" onClick={(e) => (removeTodo(todo, e))}>X</button>
                  <input value={todos} ref={todoInput} key={index} type="checkbox" defaultChecked={todo.complete} class="todo" /> {todo.task}
                </li>
              ))}
          </ul>
        </div>
      </main>
    </>
  )
}
export default App;
