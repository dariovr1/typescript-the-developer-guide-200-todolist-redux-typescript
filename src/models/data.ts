import {ActionTypes} from "../types/index";
import {fetchTodos} from '../actions/index';

//todo Payload

export interface ITodo {
    id: number;
    title: string;
    completed : boolean;
}

//Type Actions

interface FetchTodos {
    type : ActionTypes.fetchTodos,
    payload : ITodo[]
}

interface DeleteTodo {
    type : ActionTypes.deleteTodos,
    payload : Number
}


//store

export interface StoreState {
    todos : ITodo[]
}

//OwnProps

export interface ITodoMapDispatch {
    fetchTodos : () => void,
    deleteTodo : (id : Number) => void
}

export interface ITodoMapStateToProps {
    todos : ITodo[]
}


export type AppProps = ITodoMapStateToProps & ITodoMapDispatch;


export type TodoAction =  FetchTodos | DeleteTodo;
