import { useContext, useReducer } from "react";
import { SwitchThemeContext } from "../../App";

const ThemedButton = () => {
  const { initialState, actions, reducer } = useContext(SwitchThemeContext);
  const [state, dispatch] = useReducer(reducer, initialState.light);
  return (
    <button
      onClick={() => {
        if (state === initialState.light) {
          dispatch({ type: actions.DARK });
        } else {
          dispatch({ type: actions.LIGHT });
        }
      }}
      style={{
        backgroundColor: state.bgColor,
        color: state.textColor,
        padding: "1em 2em",
        borderRadius: ".5rem",
        fontSize: "1.4rem",
      }}
    >
      Styled themed Component!
    </button>
  );
};
export default ThemedButton;
