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
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task  
    ));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));   
  };

  const clearCompletedTasks = () => {
    console.log("Проверка клика Clear");
    setTasks(tasks.filter(task => !task.completed));
  };

  const [filter, setFilter] = useState('all');


  let displayTasks = tasks;
  if (filter === 'active') {
    displayTasks = tasks.filter(task => !task.completed);
  } else if (filter === 'completed') {
    displayTasks = tasks.filter(task => task.completed);
  }

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <section className="todoapp">
      <header className="header">
        <h1>Todos</h1>
        <NewTaskForm addTask={addTask} />
      </header>
      <section className="main">
        <TaskList 
          tasks={displayTasks} 
          toggleTask={toggleTask}
          removeTask={removeTask}
        />
        <Footer 
          tasks={tasks} 
          currentFilter={filter}
          onFilterChange={handleFilterChange}
          onClearCompleted={clearCompletedTasks}
        />
      </section>
    </section>
  );
}

export default App;
