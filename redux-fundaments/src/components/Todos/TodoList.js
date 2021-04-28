import React from 'react';
import Todo from './Todo';

const TodoList = ({todo, updateTodo, deleteTodo}) => (
    <ul>
        { todo.map((todo, index) => (
             <Todo 
             key={todo.id} 
             todo={todo}
             updateTodo={updateTodo}
             deleteTodo={deleteTodo}
             ></Todo>       
        )) }
    </ul>
)

export default TodoList;