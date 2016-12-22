import firebase, {firebaseRef} from 'app/firebase/index.js';
import moment from 'moment';

export var setSearchText = (searchText) => {
    return {
        type: 'SET_SEARCH_TEXT', searchText //ES6 notation
    };
};

export var addTodo = (todo) => {
    return {
        type: 'ADD_TODO', todo //ES6 notation
    };
};

export var startAddTodo = (text) => {
    return (dispatch, getState) => {
        var todo = {
            text,
            completed: false,
            createdAt: moment().unix(),
            completedAt: null
        };

        var todoRef = firebaseRef
            .child('todos')
            .push(todo);

        return todoRef.then(() => {
            dispatch(addTodo({
                ...todo,
                id: todoRef.key
            }));
        });
    };
}

export var addTodos = (todos) => {
    return {
        type: 'ADD_TODOS', todos //ES6 notation
    };
};

export var toggleShowCompleted = () => {
    return {type: 'TOGGLE_SHOW_COMPLETED'};
};

export var toggleTodo = (id) => {
    return {type: 'TOGGLE_TODO', id} //ES6 notation;
};
