import { createContext, useReducer } from "react";
import { initialState, actions, taskReducer } from "../reducers/taskReducer";
import {
  loremGenerator,
  getRandomNumber,
  idGenerator,
} from "../utils/taskUtils";

const TaskContext = createContext(null);

const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const addTask = () => {
    dispatch({
      action: actions.ADD_TASK,
      data: {
        id: idGenerator(),
        title: loremGenerator(getRandomNumber(8, 15)),
        done: getRandomNumber(0, 9) > 4,
      },
    });
  };

  const toggleTask = (id) => {
    dispatch({
      action: actions.TOGGLE_TASK,
      data: { id },
    });
  };

  const deleteTask = (id) => {
    dispatch({
      action: actions.DELETE_TASK,
      data: { id },
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        addTask,
        toggleTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
