import React from 'react';
import TasksFilter from '../TasksFilter/TasksFilter';

function Footer({ tasks, currentFilter, onFilterChange, onClearCompleted }) {
  const itemsLeft = tasks.filter(task => !task.completed).length;

  return (
    <footer className="footer">
      <span className="todo-count">{itemsLeft} items left</span>
      <TasksFilter 
        currentFilter={currentFilter}
        onFilterChange={onFilterChange}
      />
      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
