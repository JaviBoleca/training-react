import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import classes from "./Button.module.css";

const Button = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className={`${classes.button} ${
        theme === "light" ? classes.dark : classes.light
      }`}
      onClick={toggleTheme}
    >
      Toggle Theme
    </button>
  );
};

export default Button;
