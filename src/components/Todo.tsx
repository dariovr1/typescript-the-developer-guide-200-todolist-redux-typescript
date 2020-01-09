import React, { useEffect, Dispatch } from 'react';
import {connect} from 'react-redux';
import {AppProps, StoreState, Todo, ITodoMapDispatch , ITodoMapStateToProps, TodoAction} from "../models/data";
import {fetchTodos} from '../actions/index';


const mapStateToProps = (state : StoreState) : {todos : Todo[]}  => {
    return { todos : state.todos}
}


const mapDispatchToProps = (dispatch : Dispatch<TodoAction>) => {
    return {
        simpleAction : () =>  dispatch(fetchTodos())
    }
}


export const _Todo: React.FC<AppProps> = (props) => {

    useEffect( () => {
       props.simpleAction();
    },[]);

    return (
        <p>ciao</p>
    )
}


export const Todos = connect(
    mapStateToProps,
    mapDispatchToProps
)(_Todo)