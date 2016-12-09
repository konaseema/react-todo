export var setSearchText = (searchText) => {
    return {
        type: 'SET_SEARCH_TEXT', searchText //ES6 notation
    };
};

export var addTodo = (text) => {
    return {
        type: 'ADD_TODO', text //ES6 notation
    };
};

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
