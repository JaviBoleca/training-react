import Input from "./componentes/Task/TaskInput";
import List from "./componentes/Task/TaskList";
// import DB from "./mockedDB/task.json"

import { useState } from "react";

const App = () => {
    const [tasks, setTasks] = useState("");
    console.log(tasks);

    const addTask = (task) => {
        setTasks([...tasks, task])};

  return (
    <>
        <Input task ={addTask}/>
    </>
  );
};
export default App;
