import { TodoAction,ITodo } from "../../models/data";
import { ActionTypes } from "../../types";

export const todoReducer = (
    state : ITodo[] = [] , 
    action: TodoAction
    ) => {
        switch(action.type) {
            case ActionTypes.fetchTodos : 
                return action.payload;
            case ActionTypes.deleteTodos :
                return state.filter( (todo : ITodo) => todo.id !== action.payload ) 
            default:
                return state;
        }
    };
