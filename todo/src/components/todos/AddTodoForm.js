import React from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/creators';

const AddTodoForm = props => {
  const taskInput = React.createRef();
  return (
    <Form onSubmit={() => {}}>
      <Form.Group>
        <input placeholder='Enter Task' ref={taskInput} />
        <Form.Button type='submit' content='Add Task' />
      </Form.Group>
    </Form>
  );
}

const mapStateToProps = state => ({todos: state});

export default connect(mapStateToProps, {addTodo})(AddTodoForm);
