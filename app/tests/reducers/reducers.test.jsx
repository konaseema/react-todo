var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers', () => {
    describe('searchTexReducer', () => {
        it('should set searchText', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'dog'
            }
            var res = reducers.searchTextReducer(df(''), df(action));
            expect(res).toEqual(action.searchText);
        });
    });

    describe('showCompletedReducer', () => {
        it('should set showCompleted', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };
            var res = reducers.showCompletedReducer(df(false), df(action));
            expect(res).toEqual(true)
        });
    });

    describe('todosReducer', () => {
        it('should add new todo', () => {
            var action = {
                type: 'ADD_TODO',
                todo: {
                    id: 'abc123',
                    text: 'sample todo',
                    completed: false,
                    createdAt: 123
                }
            };

            var res = reducers.todosReducer(df([]), df(action));
            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(action.todo);
        });

        it('should toggle todo properly', () => {
            var todos = [
                {
                    id: 11,
                    text: 'test features',
                    completed: false,
                    createdAt: 0,
                    completedAt: undefined
                }
            ];

            var action = {
                type: 'TOGGLE_TODO',
                id: 11
            };
            var res = reducers.todosReducer(df(todos), df(action));
            expect(res[0].completed).toExist();
            expect(res[0].completedAt).toExist();
        });

        it('should add existing todos', () => {
            var todos = [
                {
                    id: 111,
                    text: 'anything',
                    completed: false,
                    completedAt: undefined,
                    createdAt: 33000
                }
            ];

            var action = {
                type: 'ADD_TODOS',
                todos
            };
            var res = reducers.todosReducer(df([]), df(action));
            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(todos[0]);
        });

        it('should toggle completed value to undefined when completed changed from true to f' +
                'alse',
        () => {
            var todos = [
                {
                    id: 11,
                    text: 'test features',
                    completed: true,
                    createdAt: 0,
                    completedAt: 1234
                }
            ];

            var action = {
                type: 'TOGGLE_TODO',
                id: 11
            };
            var res = reducers.todosReducer(df(todos), df(action));
            expect(res[0].completed).toBe(false);
            expect(res[0].completedAt).toNotExist();
        });
    });
});