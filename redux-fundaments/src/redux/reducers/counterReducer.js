import { INCREMENT, DECREMENT } from '../actions/counterActions';

//Reducer
// Es una funcion pura que nos regresa el estado actual de la funcion

//las funciones puras los parametros que se inyectan son los mismo que se deben retornar 
//las fnciones puras no deben generar efectos secundarios

const initialState = 0;

function counter (state = initialState, action){

    switch(action.type){
        case INCREMENT:
            return state + 1;

        case DECREMENT:
            return state - 1;

        default:
            return state;
    }
}

export default counter;