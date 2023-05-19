import "./App.css";
// import { ThemeProvider } from "./context/ThemeContext";
// import Button from "./components/Button/Button";
import { SwitchThemeProvider } from "./context/SwitchThemeContext";
import Toolbar from "./components/Toolbar/Toolbar";

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
      <SwitchThemeProvider>
        <Toolbar />
      </SwitchThemeProvider>
    </div>
  );
}

export default App;
