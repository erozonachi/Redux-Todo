import React from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/creators';
import uuid from 'uuid';

const AddTodoForm = props => {
  const taskInput = React.createRef();
  const handleSubmit = event => {
    event.preventDefault();

    if (taskInput.current.value.trim() !== '') {
      props.addTodo(
        {
          id: uuid(),
          value: taskInput.current.value,
          completed: false,
        }
      );
      taskInput.current.value = '';
    }
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <input placeholder='Enter Task' ref={taskInput} />
        <Form.Button type='submit' content='Add Task' />
      </Form.Group>
    </Form>
  );
}

const mapStateToProps = state => ({todos: state});

export default connect(mapStateToProps, {addTodo})(AddTodoForm);
