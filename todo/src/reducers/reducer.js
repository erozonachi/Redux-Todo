import { CREATE_NEW_TODO, TOGGLE_TODO_COMPLETED, DELETE_TODO } from '../actions/action';
import LocalData from '../stores/LocalData';

const initialState = LocalData.fetchData('todoList') || [];

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_TODO:
      return state.concat(action.payload);

    case TOGGLE_TODO_COMPLETED:
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return {...todo, completed: action.payload.completed}
        }
        return todo
      });
    
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload.id);

    default:
      return state;
  }
}
