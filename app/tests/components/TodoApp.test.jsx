var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {

    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should add todo to todos state on handleAddTodo', () => {
        var todoText = 'chill with bro';
        var todoapp = TestUtils.renderIntoDocument(<TodoApp />);
        todoapp.setState({
            todos: []
        });
        todoapp.handleAddTodo(todoText);
        expect(todoapp.state.todos[0].text).toBe(todoText);
        expect(todoapp.state.todos.length).toBe(1);

    });

    it('should toggle completed value when handleToggle called', () => {
        var todoData = {
            id: 11,
            text: 'test features',
            completed: false
        }

        var todoapp = TestUtils.renderIntoDocument(<TodoApp />);
        todoapp.setState({
            todos: [todoData]
        });

        expect(todoapp.state.todos[0].completed).toBe(false);
        todoapp.handleToggle(11);
        expect(todoapp.state.todos[0].completed).toBe(true);
    });
});

