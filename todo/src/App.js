import React from 'react';
import AddTodoForm from './components/todos/AddTodoForm';
import TodoList from './components/todos/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoList />
      <AddTodoForm />
    </div>
  );
}

export default App;
