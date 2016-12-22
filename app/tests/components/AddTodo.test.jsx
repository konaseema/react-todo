var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var {AddTodo} = require('AddTodo');
import * as actions from 'actions';

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should dispatch ADD_TODO when valid todo text', () => {
        var todoText = 'chill with my bro';
        var action = actions.startAddTodo(todoText);

        var spy = expect.createSpy();
        var addtodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addtodo));

        addtodo.refs.todoText.value = todoText;

        TestUtils
            .Simulate
            .submit($el.find('form')[0]);
        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should not dispatch ADD_TODO when invalid todoText', () => {
        var todoText = '';
        var action = {
            type: 'ADD_TODO',
            text: todoText
        };

        var spy = expect.createSpy();
        var addtodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addtodo));

        addtodo.refs.todoText.value = todoText;

        TestUtils
            .Simulate
            .submit($el.find('form')[0]);
        expect(spy).toNotHaveBeenCalled();
    });
});