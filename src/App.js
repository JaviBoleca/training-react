import { useEffect } from "react";
import useFetch from "./hooks/useFetch";
import TaskList from "./components/Tasks/TasksList";
import TasksInput from "./components/Tasks/TasksInput";
import classes from "./App.module.css";
import HourGlass from "./components/UI/Spinners/HourGlass";

const URL = {
  baseURL:
    "https://task-list-4df55-default-rtdb.europe-west1.firebasedatabase.app",
  endpoint: "/tasks",
};

const App = () => {
  const { info, pending, error, fetchHandler } = useFetch(URL.baseURL);

  const addTaskHandler = async (enteredText) => {
    let newTask = {
      text: enteredText,
      id: Math.random().toString(16).substring(2),
    };
    await fetchHandler(`${URL.endpoint}.json`, "POST", newTask);
    await fetchHandler(`${URL.endpoint}.json`, "GET");
  };

  const deleteItemHandler = async (id) => {
    await fetchHandler(`${URL.endpoint}/${id}.json`, "DELETE"); //llama a fetchHandler
    await fetchHandler(`${URL.endpoint}.json`, "GET"); //Al agregar ".json" al final de la URL, se le está indicando a
    //la API que se espera que los datos se envíen o reciban en formato JSON.
  };

  const updateItemHandler = async (id, text) => {
    await fetchHandler(`${URL.endpoint}/${id}.json`, "UPDATE", { text });
    await fetchHandler(`${URL.endpoint}.json`, "GET");
  };

  useEffect(() => {
    fetchHandler(`${URL.endpoint}.json`, "GET");
  }, [fetchHandler]);

  return (
    <main>
      <section className={classes["task-form"]}>
        <TasksInput onAddTask={addTaskHandler} />
      </section>
      {pending && <HourGlass />}
      <section className={classes["tasks-content"]}>
        {!pending && info !== null && error === null && (
          <TaskList
            items={info}
            onDeleteItem={deleteItemHandler}
            onEditItem={updateItemHandler}
          />
        )}
        {!pending && info === null && error === null && (
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
