import { CREATE_NEW_TODO, TOGGLE_TODO_COMPLETED, DELETE_TODO } from './action';

export const addTodo = newTodo => {
  return {
    type: CREATE_NEW_TODO,
    payload: newTodo,
  };
}

export const toggleCompleted = todo => {
  return {
    type: TOGGLE_TODO_COMPLETED,
    payload: todo,
  }
}

export const deleteTodo = todo => {
  return {
    type: DELETE_TODO,
    payload: todo,
  };
}
