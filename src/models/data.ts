import {ActionTypes} from "../types/index";
import {fetchTodos} from '../actions/index';

//todo Payload

export interface Todo {
    id: number;
    title: string;
    completed : boolean;
}

//Type Actions

export interface FetchTodos {
    type : ActionTypes.fetchTodos,
    payload : Todo[]
}

interface DeleteTodo {
    type : ActionTypes.deleteTodos,
    id : number
}


//store

export interface StoreState {
    todos : Todo[]
}

//OwnProps

export interface ITodoMapDispatch {
    fetchTodos : () => void;
}

export interface ITodoMapStateToProps {
    todos : Todo[]
}


export type AppProps = ITodoMapStateToProps & ITodoMapDispatch;


export type TodoAction =  FetchTodos | DeleteTodo;
