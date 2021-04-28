//Nombre de constantes de acciones 
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

//Creadores de acciones
export function increment(){
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

/*export function incrementAsync(delay){

    return function(dispatch){
        setTimeout(() => {
            dispatch({
                type: INCREMENT
            });
        }, delay);
    } 
}*/

//otra forma
export const incrementAsync = (delay) => (dispatch) => {
    setTimeout(() => {
        dispatch({
            type: INCREMENT
        });
    }, delay);
}