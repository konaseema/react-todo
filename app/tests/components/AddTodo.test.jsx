var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should call handleaddtodo if valid seconds entered', () => {
        var spy = expect.createSpy();
        var addtodo = TestUtils.renderIntoDocument(<AddTodo onAddNewTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addtodo));

        addtodo.refs.todoText.value = 'chill with my bro';

        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toHaveBeenCalledWith('chill with my bro');
    });

    it('should not call onSetCountdown if invalid seconds entered', () => {
        var spy = expect.createSpy();
        var addtodo = TestUtils.renderIntoDocument(<AddTodo onAddNewTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addtodo));

        addtodo.refs.todoText.value = '';

        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});