import db from "../db/db.json";

const initialState = {
  tasks: db.tasks,
};

const actions = {
  ADD_TASK: "ADD_TASK",
  DELETE_TASK: "DELETE_TASK",
  TOGGLE_TASK: "TOGGLE_TASK",
};

const taskReducer = (state, payload) => {
    // console.log(payload);
  switch (payload.action) {
    case actions.ADD_TASK:
      return {
        tasks: [...state.tasks, payload.data],
      };
    case actions.DELETE_TASK:
      return {
        tasks: state.tasks.filter((task) => {
          return task.id !== payload.data.id;
        }),
      };
    case actions.TOGGLE_TASK:
      return {
        tasks: state.tasks.map((task) => {
          return task.id === payload.data.id
            ? { ...task, done: !task.done }
            : task;
        }),

      };
    default:
      return { tasks: state.tasks };
  }
};

export { initialState, actions, taskReducer };