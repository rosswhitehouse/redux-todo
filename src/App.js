import React, { Component } from 'react';

import TodoList from './components/TodoList/TodoList';

class App extends Component {
  render() {
    const todos = [
      '1',
      '2',
      '3'
    ]

    return (
      <TodoList todos={todos} />
    );
  }
}

export default App;
