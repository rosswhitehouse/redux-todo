import React from 'react';

import TodoItem from '../TodoItem/TodoItem';

class TodoList extends React.Component {
    renderTodos() {
        const todos = this.props.todos;

        todos.map((todo) => {
            console.log('map');
            return <TodoItem todo={todo} />;
        });
    }

    render() {
        return <ul>{this.renderTodos()}</ul>;
    }
}

export default TodoList;