import React from 'react';

function TasksFilter() {
  return (
    <ul className="filters" style={{ listStyle: 'none', padding: 0, display: 'inline-block', marginLeft: '20px' }}>
      <li style={{ display: 'inline', marginRight: '10px' }}>
        <button className="selected">All</button>
      </li>
      <li style={{ display: 'inline', marginRight: '10px' }}>
        <button>Active</button>
      </li>
      <li style={{ display: 'inline' }}>
        <button>Completed</button>
      </li>
    </ul>
  );
}

export default TasksFilter;
