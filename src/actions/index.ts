import {Dispatch} from 'redux';
import apiClient  from '../clients/Clients';
import {  ITodo, TodoAction } from "../models/data";
import {ActionTypes} from "../types/index";


export const fetchTodos = () : any => {
    console.log("hi from fetchTodos");
    return async (dispatch : Dispatch<TodoAction> ) => {
        const response = await apiClient.get<ITodo[]>("/todos");
        console.log(response);
        dispatch<TodoAction>({
            type : ActionTypes.fetchTodos,
            payload : response.data
        });

    }
}

export const deleteTodo = (id : Number) : TodoAction  => {
        return {
            type : ActionTypes.deleteTodos,
            payload : id
        }
} 