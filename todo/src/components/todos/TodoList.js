import React from 'react'
import { List, Segment } from 'semantic-ui-react'
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import { toggleCompleted, deleteTodo } from '../../actions/creators';

const TodoList = props => {
  const todoList = props.todos.map(todo => <TodoItem 
    key={todo.id} 
    todo={todo}
    toggleCompleted={props.toggleCompleted}
    deleteTodo={props.deleteTodo}  />)
  return (
    <Segment inverted>
      <List divided inverted relaxed>
        {todoList.length > 0? todoList : 'No Todo found'}
      </List>
    </Segment>
  );
}

const mapStateToProps = state => ({todos: state});

export default connect(mapStateToProps, {toggleCompleted, deleteTodo})(TodoList);
