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
                text: 'Walk the dog'
            };

            var res = reducers.todosReducer(df([]), df(action));
            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.text);
        });

        it('should toggle todo properly', () => {
            // define todo array with todo item generate action call reducer and assert
            // complete flipped

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
            var res = reducers.todosReducer(todos, action);
            expect(res[0].completed).toExist();
            expect(res[0].completedAt).toExist();
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
            var res = reducers.todosReducer(todos, action);
            expect(res[0].completed).toBe(false);
            expect(res[0].completedAt).toNotExist();
        });
    });
});