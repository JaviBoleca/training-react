import { createContext, useReducer } from "react";
import { initialState, actions, reducer } from "../reducers/themedReducer";

const SwitchThemeContext = createContext(null);
const SwitchThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState.light);
  return (
    <SwitchThemeContext.Provider
      value={{ initialState, actions, state, dispatch }}
    >
      {children}
    </SwitchThemeContext.Provider>
  );
};
export { SwitchThemeContext, SwitchThemeProvider };
