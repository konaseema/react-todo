var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

var TodoAPI = require('TodoAPI');

import './../firebase-playground/index.js'

store.subscribe(() => {
    var state = store.getState();
    console.log('New state is', state);
    TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

//load foundation
$(document).foundation();

///app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Provider store={store}>
    <TodoApp/>
</Provider>, document.getElementById('app'));