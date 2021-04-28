import { UPDATE_NAME } from '../actions/userActions';

const initialState = {
    name: 'Johan Sosa',
    country: 'Venezuela'
}

function user (state = initialState, action){
    switch(action.type){
        case UPDATE_NAME:
            return {
                ...state,
                name: action.payload.name
            }

        default:
            return state;
    }
}

export default user;