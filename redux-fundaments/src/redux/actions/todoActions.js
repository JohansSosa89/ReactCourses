export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export function addTodo(todo){
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export function updateTodo(todoUpdated){
    return{
        type: UPDATE_TODO,
        payload: todoUpdated
    }
}

export function deleteTodo(todoDeleted){
    return{
        type: DELETE_TODO,
        payload: todoDeleted
    }
}