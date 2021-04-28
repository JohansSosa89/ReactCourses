import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from '../actions/todoActions';

const initialState = {
    todos: [
        {
            text: 'Crear componente',
            id: 'a1b2c3',
            checked: false
        },
        {
            text: 'Subir videos de lecciones',
            id: 'a1b3c4',
            checked: true
        }
    ]
}

function todo(state = initialState, action){
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload
                ]
            }
        
        case UPDATE_TODO:
            return{
                ...state,
                todos: state.todos.map((todo) => {
                    if(action.payload.id === todo.id) {
                        return {
                            ...todo,
                            checked: !todo.checked
                        }
                    }

                    return todo;
                })
            }

        case DELETE_TODO:
            return{
                ...state,
                todos: state.todos.filter((todo) => {
                    return todo.id !== action.payload.id
                })
            }
            

        default:
            return state;
    }
}

export default todo;