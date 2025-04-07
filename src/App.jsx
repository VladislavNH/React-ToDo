import React, { useState } from 'react';
import NewTaskForm from './components/NewTaskForm/NewTasksFrom';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date(),
    };
    setTasks([ ...tasks, newTask ]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <section className="todoapp">
      <header className="header">
        <h1>Todos</h1>
        <NewTaskForm addTask={addTask} />
      </header>
      <section className="main">
        <TaskList tasks={tasks} toggleTask={toggleTask} removeTask={removeTask} />
        <Footer tasks={tasks} />
      </section>
    </section>
  );
}

export default App;
