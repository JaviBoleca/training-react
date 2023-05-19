import { useContext } from "react";
import { SwitchThemeContext } from "../../context/SwitchThemeContext";

const ThemedButton = () => {
  const {
    initialState: theme,
    actions,
    state,
    dispatch,
  } = useContext(SwitchThemeContext);

  return (
    <button
      onClick={() => {
        if (state == theme.light) {
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
