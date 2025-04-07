import React from 'react';
import { formatDistanceToNow } from 'date-fns';


function Task({ task, toggleTask, removeTask }) {
  const timeAgo = formatDistanceToNow(task.createdAt, { addSuffix: true });

  return (
    <li className={task.completed ? 'completed' : ''}>
      <div className="view" style={{ display: 'flex', alignItems: 'center', padding: '10px', borderBottom: '1px solid #eee' }}>
        <input 
          className="toggle" 
          type="checkbox" 
          checked={task.completed} 
          onChange={() => toggleTask(task.id)} 
        />
        <label style={{ flexGrow: 1, marginLeft: '10px' }}>
          <span className="description">{task.text}</span>
          <span className="created" style={{ marginLeft: '10px', fontSize: '12px', color: '#888' }}>
            created {timeAgo}
          </span>
        </label>
        <button className="icon icon-edit" style={{ marginRight: '5px' }}></button>
        <button className="icon icon-destroy" onClick={() => removeTask(task.id)}></button>
      </div>
    </li>
  );
}

export default Task;
