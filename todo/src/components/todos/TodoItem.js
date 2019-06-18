import React from 'react'
import { List } from 'semantic-ui-react'

const TodoItem = props => {
  const handleClick = () => {
    props.toggleCompleted({
      id: props.todo.id,
      completed: !props.todo.completed,
    });
  }

  return (
    <List.Item onClick={handleClick}>
      <List.Content>
        {props.todo.value}
      </List.Content>
    </List.Item>
  );
}

export default TodoItem;
