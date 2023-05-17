import { useState } from 'react';
import data from "./mockedDB/tasks.json"
import TaskList from './components/Tasks/TasksList';
import TasksInput from './components/Tasks/TasksInput';
import classes from './App.module.css';

const App = () => {
  const [tasks, setNewTask] = useState(data);

  const addTaskHandler = enteredText => {
    setNewTask(prevTasks => {
      const updatedTasks = [...prevTasks];
      updatedTasks.unshift({ text: enteredText, id: Math.random().toString(16).substring(2) });
      return updatedTasks;
    });
  };

  const deleteItemHandler = taskId => {
    setNewTask(prevTasks => {
      const updatedTasks = prevTasks.filter(task => task.id !== taskId);
      return updatedTasks;
    });
  };

  let content = (
    <h2 style={{ textAlign: 'center', padding: '1em', border: '1px solid #339900', backgroundColor: '#99cc33' }}>No tasks availables. Add one?</h2>
  );

  if (tasks.length > 0) {
    content = (
      <TaskList items={tasks} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <main>
      <section className={classes["task-form"]}>
        <TasksInput onAddTask={addTaskHandler} />
      </section>
      <section className={classes["tasks-content"]}>
        {content}
      </section>
    </main>
  );
};

export default App;
