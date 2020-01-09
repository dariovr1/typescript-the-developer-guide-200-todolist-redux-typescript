import { combineReducers } from 'redux';
import { todoReducer } from '../reducers/todos/index';
import { StoreState } from "../models/data";



export const reducers = combineReducers<StoreState>({
   todos : todoReducer
});