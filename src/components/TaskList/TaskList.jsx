
import React from 'react';
import PropTypes from 'prop-types';

import './TaskList.css';
import Task from '../Task/Task';
import EditTask from '../EditTask/EditTask'; 

function TaskList({ tasks, renderMode, onDeleteTask, onCompleteTask, onEditTask }) {
  const items = tasks.reduce((acc, task) => {
    let classList = '';
    const {
      description, created, id, editing, completed,
    } = task;
    
    let willRender = true;

    if (completed) {
      classList += ' completed';
    }
    if (editing) {
      classList += ' editing';
    }

    switch (renderMode) {
      case 'Active':
        if (completed) willRender = false;
        break;
      case 'Completed':
        if (!completed) willRender = false;
        break;
      default:
        break;
    }

    if (willRender) {
      acc.push(
        <li className={classList} key={id}>
          <EditTask
            description={description}
            id={id}
            onEditTask={onEditTask}
          />
          
          <Task
            description={description}
            created={created}
            id={id}
            editing={editing}
            completed={completed}
            onDeleteTask={onDeleteTask}
            onCompleteTask={onCompleteTask}
            onEditTask={onEditTask}
          />
        </li>,
      );
    }

    return acc;
  }, []);

  return <ul className="todo-list">{items}</ul>;
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      created: PropTypes.instanceOf(Date).isRequired,
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      editing: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  renderMode: PropTypes.oneOf(['All', 'Active', 'Completed']),
  onCompleteTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onEditTask: PropTypes.func.isRequired,
};

TaskList.defaultProps = {
  renderMode: 'All',
};

export default TaskList;
