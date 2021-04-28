export const ADD_FRUIT = 'ADD_FRUIT';

export function addFruit(fruit) {
    return {
        type: ADD_FRUIT,
        payload: {
            fruit
        }
    }
}