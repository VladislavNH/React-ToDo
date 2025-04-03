import React from 'react';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import './index.css'; 

const tasks = [
  { id: 1, title: 'Learn React', completed: false, createdAt: new Date() },
  { id: 2, title: 'Build TODO App', completed: false, createdAt: new Date() },
];

function App() {
  return (
    <div className="todoapp">
      <NewTaskForm />
      <TaskList tasks={tasks} />
      <Footer />
    </div>
  );
}

export default App;
