import thunk from 'redux-thunk';
import { reducers } from '../reducers/index';
import { createStore, applyMiddleware, compose } from 'redux';

const Middlewares = [thunk];

 const store = createStore(
    reducers,
    compose(
        applyMiddleware(...Middlewares),
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )       

);


export default store;

