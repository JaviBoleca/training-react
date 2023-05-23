import { useState, useEffect } from "react";
import TaskList from "./components/Tasks/TasksList";
import TasksInput from "./components/Tasks/TasksInput";
import classes from "./App.module.css";
import HourGlass from "./components/UI/Spinners/HourGlass";

const App = () => {
  const [tasks, setNewTask] = useState({});
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const fetchTasksHandler = async () => {
    setPending(true);
    setError(null);
    try {
      const response = await fetch(
        "https://task-list-4df55-default-rtdb.europe-west1.firebasedatabase.app/tasks.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      // console.log(data);
      setNewTask(data);
    } catch (error) {
      setError({
        message: error.message || "Something went wrong!",
      });
    }
    setTimeout(() => {
      setPending(false);
    }, 1000);
    //setPending(false);
  };

  const postTasksHandler = async (task) => {
    setPending(true);
    setError(null);
    try {
      const response = await fetch(
        "https://task-list-4df55-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(task),
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong! Can't add new task.");
      }
      fetchTasksHandler();
    } catch (error) {
      setError({
        message: error.message || "Something went wrong!",
      });
    }

    setPending(false);
  };

  const addTaskHandler = (enteredText) => {
    let newTask = {
      text: enteredText,
      id: Math.random().toString(16).substring(2),
    };
    postTasksHandler(newTask);
  };

  const deleteItemHandler = async (taskId) => {
    setPending(true);
    setError(null);
    try {
      const response = await fetch(
        `https://task-list-4df55-default-rtdb.europe-west1.firebasedatabase.app/tasks/${taskId}.json`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong! Can't delete task.");
      }

      fetchTasksHandler();
    } catch (error) {
      setError({
        message: error.message || "Something went wrong!",
      });
    }
    setPending(false);
  };

  const updateItemHandler = async (id,text) => {
    setPending(true);
    setError(null);
    try {
      const response = await fetch(
        `https://task-list-4df55-default-rtdb.europe-west1.firebasedatabase.app/tasks/${id}.json`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({text}),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong! Can't update task.");
      }

      fetchTasksHandler();
    } catch (error) {
      setError({
        message: error.message || "Something went wrong!",
      });
    }
    setPending(false);
  };

  useEffect(() => {
    fetchTasksHandler();
  }, []);

  return (
    <main>
      <section className={classes["task-form"]}>
        <TasksInput onAddTask={addTaskHandler} />
      </section>
      {pending && <HourGlass />}
      <section className={classes["tasks-content"]}>
        {!pending && tasks !== null && error === null && (
          <TaskList
            items={tasks}
            onDeleteItem={deleteItemHandler}
            onEditItem={updateItemHandler}
          />
        )}
        {!pending && tasks === null && error === null && (
          <h2
            style={{
              textAlign: "center",
              padding: "1em",
              border: "1px solid #339900",
              backgroundColor: "#99cc33",
            }}
          >
            No tasks availables. Add one?
          </h2>
        )}
        {!pending && error !== null && (
          <h2
            style={{
              textAlign: "center",
              padding: "1em",
              border: "1px solid #ff0000",
              backgroundColor: "#ff6666",
            }}
          >
            {error.message}
          </h2>
        )}
      </section>
    </main>
  );
};

export default App;
