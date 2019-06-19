import React from 'react'
import { List, Icon } from 'semantic-ui-react'

const TodoItem = props => {
  const handleClick = () => {
    props.toggleCompleted({
      id: props.todo.id,
      completed: !props.todo.completed,
    });
  }
  const handleDelete = () => {
    props.deleteTodo({
      id: props.todo.id
    });
  }

  return (
    <List.Item onClick={handleClick} >
      <List.Content >
        {props.todo.completed? <Icon name='check' /> : ''}
        &nbsp;
        {props.todo.value}
        &nbsp;
        <Icon onClick={handleDelete} name='times' />
      </List.Content>
    </List.Item>
  );
}

export default TodoItem;
