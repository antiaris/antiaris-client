/**
 * Copyright (C) 2016 tieba.baidu.com
 * index.js
 *
 * changelog
 * 2016-03-08[15:01:20]:revised
 * 2016-03-09[18:58:49]:redux with react
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
 */
import {Redux} from 'ewf/libs/redux';
import {unique} from 'ewf/widget/unique';
import {React} from 'ewf/libs/react';
import {ReactDOM} from 'ewf/libs/react-dom';
/* eslint-disable no-unused-vars */
import {ReactRedux} from 'ewf/libs/react-redux';
/* eslint-enable no-unused-vars */

const ACTION_TYPES = {
    ADD: 'ADD',
    DELETE: 'DELETE',
    SORT: 'SORT',
    COMPLETE: 'COMPLETE'
};

const SORT_BY = {
    ASC:'ASC',
    DESC:'DESC'
};

const initialState = {
    sortBy: SORT_BY.ASC,
    todos: []
};

function sortAction(sortBy) {
    return {
        type: ACTION_TYPES.SORT,
        payload: {
            sortBy: sortBy
        }
    };
}

function todoAddAction(text) {
    return {
        type: ACTION_TYPES.ADD,
        payload: {
            text: text,
            id: unique(),
            time: Date.now()
        }
    };
}

function todoDeleteAction(id) {
    return {
        type: ACTION_TYPES.DELETE,
        payload: {
            id: id
        }
    };
}

function todoCompleteAction(id) {
    return {
        type: ACTION_TYPES.COMPLETE,
        payload: {
            id: id
        }
    };
}

function sortBy(state = initialState.sortBy, action) {
    if (action.type === ACTION_TYPES.SORT) {
        return action.payload.sortBy;
    } else {
        return state;
    }
}

function todos(state = initialState.todos, action) {
    let newState;
    switch (action.type) {
    case ACTION_TYPES.ADD:
        newState = state.slice();
        newState.push({
            text: action.payload.text,
            time: action.payload.time,
            id: action.payload.id,
            complete: false
        });
        return newState;
    case ACTION_TYPES.COMPLETE:
         newState = state.slice();
         newState.forEach((n) => {
            if (n.id === action.payload.id) {
                n.complete = true;
            }
        });
        return newState;
    case ACTION_TYPES.DELETE:
        newState = state.filter((n) => {
            return n.id !== action.payload.id;
        });
        return newState;
    default:
        return state;
    }
}
/* eslint-disable no-invalid-this,no-unused-vars */
class Todo extends React.Component {
    render(){
        const {deleteAction, completeAction} = this.props;
        const list = this.props.todos.map(function(todo){
            let className = ['todo-item'];
            if(todo.complete){
                className.push('complete');
            }
            className = className.join(' ');
            return (<div key={todo.id} className={className}>{todo.text} <a href="#" onClick={()=>{deleteAction(todo.id);}}>X</a> <a href="#" onClick={()=>{completeAction(todo.id);}}>Y</a></div>);
        });
        return (<div className="todo">{list}</div>);
    }
}
/* eslint-enable no-invalid-this,no-unused-vars */
class App {
    constructor(){
        this.el = document.querySelector('#todo-container');
    }
    runWithoutConnect() {

        const store = Redux.createStore(Redux.combineReducers({
            sortBy, todos
        }));

        store.dispatch(todoAddAction('Study meteor'));
        store.dispatch(todoAddAction('Study flux'));
        store.dispatch(sortAction(SORT_BY.DESC));

        const onDelete = (id) => {
            store.dispatch(todoDeleteAction(id));
        };

        const onComplete = (id) => {
           store.dispatch(todoCompleteAction(id));
        };

        const render = () => {
             ReactDOM.render(<Todo {...store.getState()} deleteAction={onDelete} completeAction={onComplete}/>, this.el);
        };

        store.subscribe(render);
        render();
    }
    runWithConnect() {
        const store = Redux.createStore(Redux.combineReducers({
            sortBy, todos
        }));

        store.dispatch(todoAddAction('Study meteor'));
        store.dispatch(todoAddAction('Study flux'));
        store.dispatch(sortAction(SORT_BY.DESC));

        const mapStateToProps = (state) => {
            return state;
        };

        const mapDispatchToProps = (dispatch) => {
            return {
                addAction: Redux.bindActionCreators(todoAddAction, dispatch),
                deleteAction: Redux.bindActionCreators(todoDeleteAction, dispatch),
                completeAction: Redux.bindActionCreators(todoCompleteAction, dispatch),
                sortAction: Redux.bindActionCreators(sortAction, dispatch)
            };
        };
        /* eslint-disable no-unused-vars */
        const Provider = ReactRedux.Provider;

        const TodoContainer = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Todo);
        /* eslint-enable no-unused-vars */
        ReactDOM.render(<Provider store={store}>
            <TodoContainer></TodoContainer>
        </Provider>, this.el);
    }
}

export {App};