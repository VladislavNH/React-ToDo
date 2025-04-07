import React from 'react';
import Task from '../Task/Task';

function TaskList({ tasks, toggleTask, removeTask }) {
  return (
    <ul className="todo-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {tasks.map(task => (
        <Task 
          key={task.id} 
          task={task} 
          toggleTask={toggleTask} 
          removeTask={removeTask} 
        />
      ))}
    </ul>
  );
}

export default TaskList;
