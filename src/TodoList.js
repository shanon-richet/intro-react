import React, { useState } from "react";

export default function TodoList() {
    const initialTodos = ["Todo 1", "Todo 2"]
    const [todos, setTodos] = useState(initialTodos);
    return (
        <ul>
            {todos.map(todo => (
                <li>
                    <input type="checkbox" /> {todo}
                </li>
            ))}
        </ul>
    );
}