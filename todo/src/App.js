import React from 'react';
import AddTodoForm from './components/todos/AddTodoForm';
import TodoList from './components/todos/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Awesome Todo App</h1>
      <TodoList />
      <AddTodoForm />
    </div>
  );
}

export default App;
