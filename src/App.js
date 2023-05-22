import "./App.css";
import { SwitchThemeProvider } from "./context/SwitchThemeContext";
import Toolbar from "./components/Toolbar/Toolbar";

function App() {
  return (
    <div
      style={{
        padding: "1em",
      }}
    >
      <SwitchThemeProvider>
        <Toolbar />
      </SwitchThemeProvider>
    </div>
  );
}

export default App;
