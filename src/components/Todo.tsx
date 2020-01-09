import React, { useEffect, Dispatch } from 'react';
import {connect} from 'react-redux';
import {AppProps, StoreState, ITodo, ITodoMapDispatch , ITodoMapStateToProps, TodoAction} from "../models/data";
import {fetchTodos, deleteTodo} from '../actions/index';


const mapStateToProps = (state : StoreState) : {todos : ITodo[]}  => {
    return { todos : state.todos}
}


const mapDispatchToProps = (dispatch : Dispatch<TodoAction>) => {
    return {
        fetchTodos : () =>  dispatch(fetchTodos()),
        deleteTodo : (id : Number) => dispatch (deleteTodo(id))
    }
}


export const _Todo: React.FC<AppProps> = (props) => {

    const renderList = () :JSX.Element[]  => {
        return props.todos.map((todo: ITodo) => {
          return (
              <div onClick={() => onTodoClick(todo.id)} key={todo.id}>
                {todo.title}
              </div>
          );
        });
      }

    const onTodoClick = (id: number): void => {
        props.deleteTodo(id);
      };

    useEffect( () => {
       props.fetchTodos();
    },[]);

    return (
        <div>
        {renderList()}
        </div>
    )
   
    }



export const Todos = connect(
    mapStateToProps,
    mapDispatchToProps
)(_Todo)