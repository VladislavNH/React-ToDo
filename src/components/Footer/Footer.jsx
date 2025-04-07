import React from 'react';
import TasksFilter from '../TasksFilter/TasksFilter';

function Footer({ tasks }) {
  const itemsLeft = tasks.filter(task => !task.completed).length;

  return (
    <footer className="footer">
      <span className="todo-count">{itemsLeft} items left</span>
      <TasksFilter />
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}

export default Footer;
