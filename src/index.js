import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

export default function addToDo() {
  return (
    <ul>
      <li>
      <input type="checkbox" /> My first todo
      </li>
      <li>
      <input type="checkbox" /> My first todo
      </li>
    </ul>
  )
}
