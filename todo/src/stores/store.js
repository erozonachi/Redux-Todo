import { createStore } from 'redux';
import { todosReducer as todos } from '../reducers/reducer';

export const store = createStore(todos,  
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
