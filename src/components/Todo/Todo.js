import classes from "./Todo.module.css";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

const Todo = () => {
  const { tasks, addTask, deleteTask, toggleTask } = useContext(TaskContext);

  return (
    <div className={classes["tasks-list"]}>
      <h1>To Do App</h1>
      <ul>
        {(tasks.length > 0 &&
          tasks.map((task) => {
            return (
              <li key={task.id}>
                <span className={task.done ? classes.done : ""}>
                  {task.title}
                </span>
                <div className={classes.actions}>
                  <button
                    className={classes.toggle}
                    onClick={() => toggleTask(task.id)}
                  >
                    Toggle
                  </button>
                  <button
                    className={classes.remove}
                    onClick={() => deleteTask(task.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            );
          })) || (
          <li className={`${classes["no-border"]} ${classes.alert}`}>
            No tasks!!
          </li>
        )}
      </ul>
      <button className={classes["new-task"]} onClick={() => addTask()}>
        Add
      </button>
    </div>
  );
};

export default Todo;
