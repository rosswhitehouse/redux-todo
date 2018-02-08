import React from 'react';

import TodoItem from '../TodoItem/TodoItem';

function TodoList(props) {
    const renderTodos = () => {
        return props.todos.map((todo, index) =>
            <TodoItem key={index} todo={todo} />
        );
    }
    
    return <ul>{renderTodos()}</ul>;
}

export default TodoList;