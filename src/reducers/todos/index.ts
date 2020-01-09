import { TodoAction,Todo } from "../../models/data";
import { ActionTypes } from "../../types";

export const todoReducer = (
    state : Todo[] = [] , 
    action: TodoAction
    ) => {
        switch(action.type) {
            case ActionTypes.fetchTodos : 
                return action.payload;
            default:
                return state;
        }
    };
