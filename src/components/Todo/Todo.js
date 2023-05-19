import classes from "./Todo.module.css";
import { useReducer } from "react";
import { loremGenerator, getRandomNumber } from "../../utils/loremGenerator";
import { initialState, actions, taskReducer } from "../../reducers/taskReducer";

const Todo = () => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  return (
    <div className={classes["tasks-list"]}>
      <h1>To Do App</h1>
      <ul>
        {state.tasks.map((task) => {
          return (
            <li key={task.id}>
              <span className={task.done ? classes.done : ""}>
                {task.title}
              </span>
              <div className={classes.actions}>
                <button
                  className={classes.toggle}
                  onClick={() =>
                    dispatch({
                      action: actions.TOGGLE_TASK,
                      data: { id: task.id },
                    })
                  }
                >
                  Toggle
                </button>
                <button
                  className={classes.remove}
                  onClick={() =>
                    dispatch({
                      action: actions.DELETE_TASK,
                      data: { id: task.id },
                    })
                  }
                >
                  Remove
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <button
      className={classes["new-task"]}
        onClick={() =>
          dispatch({
            action: actions.ADD_TASK,
            data: {
              id: state.tasks.length + 1,
              title: loremGenerator(10),
              done: getRandomNumber(0,9) > 4,
            },
          })
        }
      >
        Add
      </button>
    </div>
  );
};

export default Todo;
