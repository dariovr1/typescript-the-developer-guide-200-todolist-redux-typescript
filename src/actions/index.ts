import {Dispatch} from 'redux';
import apiClient  from '../clients/Clients';
import {  Todo, FetchTodos } from "../models/data";
import {ActionTypes} from "../types/index";


export const fetchTodos = () : any => {
    console.log("hi from fetchTodos");
    return async (dispatch : Dispatch ) => {
        const response = await apiClient.get<Todo[]>("/todos");
        console.log(response);
        dispatch<FetchTodos>({
            type : ActionTypes.fetchTodos,
            payload : response.data
        });

    }
}