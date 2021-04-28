import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers'; 
import logger from 'redux-logger';
import thunk from 'redux-thunk';

//Midleware
/*const logger = (store) =>{
    return (next) => {
        return (action) => {

        }
    }
}*/

const confirmDeleteTodo = (store) => (next) => (action) =>{
    if(action.type === 'DELETE_TODO'){
        let conf = window.confirm('Seguro quieres eliminar el todo?');

        if(conf){
            next(action);
        }
    }
    else{
        next(action);
    }

    /*setTimeout(() => {
        next(action);
    }, 1000);

    if(action.type !== 'ADD_TODO'){
        setTimeout(() => {
            store.dispatch({
                type: 'ADD_TODO',
                payload:{
                    text: 'Todo creado en Midleware',
                    checked: false,
                    id: 'a1b2c3d4e5'
                }
            });
        }, 4000);
    }*/

    //next(action);
};


//Store
//El almacenamiento de nuestro estado

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = composeWithDevTools({
    name: 'Redux',
    realtime: true,
    trace: true,
    traceLimit: 20
});

const store = createStore(
    rootReducer, 
    composeEnhancers(
        applyMiddleware(logger, thunk)
    )
);

export default store;