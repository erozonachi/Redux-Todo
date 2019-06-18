import React from 'react'
import { List, Segment } from 'semantic-ui-react'
import TodoItem from './TodoItem';

const TodoList = props => {
  const todoList = props.todos.map(todo => <TodoItem 
    key={todo.id} 
    todo={todo}
    toggleCompleted={props.toggleCompleted}  />)
  return (
    <Segment inverted>
      <List divided inverted relaxed>
        {todoList.length > 0? todoList : 'No Todo found'}
      </List>
    </Segment>
  );
}

export default TodoList;
