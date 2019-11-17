import React from 'react';

import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className="container">
      <h1>Firebase Todo List</h1>
      <TodoList />
    </div>
  );
}

export default App;
