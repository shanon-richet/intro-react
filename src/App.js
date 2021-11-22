import React, { useState, useRef } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  const inputRef= useRef();
  function clickHandler() {
    const value= inputRef.current;
    console.log(value.value)
  }
 
  return (
    <>
    <h1></h1>
      <form>
          <input ref= {inputRef} placeholder= "write todo" type= "text">
          </input>
          <button onClick= {clickHandler} >add</button>
      </form>  
      <TodoList />
    </>
  );
}
export default App;
