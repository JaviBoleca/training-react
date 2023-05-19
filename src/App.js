import "./App.css";
// import { ThemeProvider } from "./context/ThemeContext";
// import Button from "./components/Button/Button";

import { createContext } from "react";
import Toolbar from "./components/Toolbar/Toolbar";

// reducer code
const initialState = {
  light: {
    textColor: "#000",
    bgColor: "#f6f8fa",
  },
  dark: {
    textColor: "#fff",
    bgColor: "#222",
  },
};

const actions = {
  LIGHT: "LIGHT",
  DARK: "DARK",
};

const reducer = (state, payload) => {
  switch (payload.type) {
    case actions.LIGHT:
      return (state = initialState.light);
    case actions.DARK:
      return (state = initialState.dark);
    default:
      throw new Error();
  }
};

// context code
export const SwitchThemeContext = createContext(initialState);

function App() {
  return (
    <div
      style={{
        padding: "1em",
      }}
    >
      {/* <ThemeProvider>
        <Button />
      </ThemeProvider> */}
      <SwitchThemeContext.Provider value={{ initialState, actions, reducer }}>
        <Toolbar/>
      </SwitchThemeContext.Provider>
    </div>
  );
}

export default App;
