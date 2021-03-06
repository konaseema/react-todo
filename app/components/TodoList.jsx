var React = require('react');
import Todo from 'Todo';
var {connect} = require('react-redux');
var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({
    render: function () {
        var {todos, showCompleted, searchText} = this.props;
        var renderTodos = () => {
            if (todos.length === 0) {
                return (
                    <p className="container__message">Nothing to do</p>
                )
            }
            return TodoAPI
                .filterTodos(todos, showCompleted, searchText)
                .map((todo) => {
                    return (
                        <Todo key={todo.id} {...todo}/>
                    /* Alternative: <Todo key={todo.id} id={todo.id} text={todo.text}/>*/
                    )
                });
        };

        return (
            <div>
                {renderTodos()}
            </div>
        )
    }
});

export default connect((state) => {
    return state;
})(TodoList);