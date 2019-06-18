import { createStore } from 'redux';
import { todosReducer as todos } from '../reducers/reducer';

export const store = createStore(todos);
