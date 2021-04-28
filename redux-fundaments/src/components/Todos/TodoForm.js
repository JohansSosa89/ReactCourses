import React from 'react';

const TodoForm = ({onSubmit}) => (
    <form action="" onSubmit={onSubmit}>
        <input type="text" name="text" id="text"/>
        <button>Agregar</button>
    </form>
)

export default TodoForm;