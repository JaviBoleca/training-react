// import Counter from "./components/Counter/Counter";
// import "./App.css";
// import { ThemeProvider } from "./context/ThemeContext";
// import Button from "./components/Button/Button";
// import { useReducer, createContext, useContext } from "react";
// import Toolbar from "./components/Toolbar/Toolbar";
// import { SwitchThemeProvider } from "./context/SwitchThemeContext";
import Todo from "./components/Todo/Todo";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <TaskProvider>
      <Todo />
    </TaskProvider>
  );

  /*<Counter />*/

  // <div
  //   style={{
  //     padding: "1em",
  //   }}
  // >
  //   {/* <ThemeProvider>
  //     <Button />
  //   </ThemeProvider> */}

  //   <SwitchThemeProvider>
  //     <Toolbar />
  //   </SwitchThemeProvider>
  // </div>
}

export default App;
