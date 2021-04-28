import { ADD_FRUIT } from '../actions/fruitActions';

const initialState = [
    'Fresa',
    'Manzana',
    'Melon'
];

function fruits (state = initialState, action){
    switch(action.type) {
        case ADD_FRUIT:
            //return state.concat(action.payload.fruit);
            return [
                ...state,
                action.payload.fruit
            ]

        default:
            return state;
    }
}

export default fruits