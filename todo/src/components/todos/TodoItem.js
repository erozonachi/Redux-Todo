import React from 'react'
import { List } from 'semantic-ui-react'

const TodoItem = props => {
  return (
    <List.Item>
      <List.Content>
        {props.todo.value}
      </List.Content>
    </List.Item>
  );
}

export default TodoItem;
