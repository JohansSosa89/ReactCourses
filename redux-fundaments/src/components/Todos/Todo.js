import React from 'react';

const Todo = ({todo, updateTodo, deleteTodo}) => (
    <li>
        <input 
        type="checkbox" 
        name="checked" 
        id="checked" 
        checked={todo.checked}
        onChange={() => {
            updateTodo(todo);
        }}
        />
        {todo.text}
        <button onClick={() => { deleteTodo(todo) }}>
            X
        </button>
    </li>
);

export default Todo;