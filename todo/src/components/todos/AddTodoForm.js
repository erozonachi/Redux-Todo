import React from 'react';
import { Form } from 'semantic-ui-react';

const AddTodoForm = props => {
  const taskInput = React.createRef();
  return (
    <Form onSubmit={() => {}}>
      <Form.Group>
        <Form.Input placeholder='Enter Task' ref={taskInput} />
        <Form.Button type='submit' content='Add Task' />
      </Form.Group>
    </Form>
  );
}

export default AddTodoForm;
