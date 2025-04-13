import React from 'react';
import './TodoApp.css';

import NewTaskForm from './components/NewTaskForm/NewTasksFrom';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';

export default class App extends React.Component {
  static toggleProperty(arr, id, propName) {
    const i = arr.findIndex((el) => el.id === id);
    const oldItem = arr[i];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [...arr.slice(0, i), newItem, ...arr.slice(i + 1)];
  }

  constructor(props) {
    super(props);
    this.idCounter = 0;
    this.state = {
      tasks: [],
      renderMode: 'All',
      renderOptions: ['All', 'Active', 'Completed'],
      newTaskFormText: '',
    };
  }

  deleteTask = (id) => {
    this.setState(({ tasks }) => {
      const i = tasks.findIndex((el) => el.id === id);
      const newArray = [...tasks.slice(0, i), ...tasks.slice(i + 1)];
      return { tasks: newArray };
    });
  };

  completeTask = (id) => {
    this.setState(({ tasks }) => ({
      tasks: App.toggleProperty(tasks, id, 'completed'),
    }));
  };

  editTask = (id, description) => {
    const { tasks } = this.state;
    const i = tasks.findIndex((el) => el.id === id);
    const oldItem = tasks[i];
    const newItem = { ...oldItem, editing: !oldItem.editing, description };
    const newArr = [...tasks.slice(0, i), newItem, ...tasks.slice(i + 1)];
    this.setState({ tasks: newArr });
  };

  addTask = (description) => {
    const newItem = this.createTask(description);
    this.setState(({ tasks }) => ({
      tasks: [...tasks, newItem],
      newTaskFormText: '',
    }));
  };

  setRenderMode = (mode) => {
    this.setState({ renderMode: mode });
  };

  deleteAllComplete = () => {
    const { tasks } = this.state;
    tasks.forEach((task) => {
      if (task.completed) this.deleteTask(task.id);
    });
  };

  newTaskChangeHandler = (e) => {
    this.setState({
      newTaskFormText: e.target.value,
    });
  };

  createTask(description) {
    const iD = this.idCounter;
    this.idCounter += 1;
    return {
      description,
      created: new Date(),
      id: iD,
      completed: false,
      editing: false,
    };
  }

  render() {
    const { tasks, newTaskFormText, renderMode, renderOptions } = this.state;
    const itemsLeft = tasks.reduce(
      (acc, task) => (!task.completed ? acc + 1 : acc),
      0
    );
    return (
      <section className="todoapp">
        <header className="header">
          <h1>Todos</h1>
          <NewTaskForm
            value={newTaskFormText}
            newTaskChangeHandler={this.newTaskChangeHandler}
            onItemAdded={this.addTask}
          />
        </header>

        <section className="main">
          <TaskList
            tasks={tasks}
            renderMode={renderMode}
            onCompleteTask={this.completeTask}
            onDeleteTask={this.deleteTask}
            onEditTask={this.editTask}
          />
          <Footer
            itemsLeft={itemsLeft}
            onRenderModeChange={this.setRenderMode}
            onDeleteAllComplete={this.deleteAllComplete}
            renderMode={renderMode}
            renderOptions={renderOptions}
          />
        </section>
      </section>
    );
  }
}
