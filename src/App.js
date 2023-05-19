import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import Button from "./components/Button/Button";

function App() {
  return (
    <div
      style={{
        padding: "1em",
      }}
    >
      <ThemeProvider>
        <Button />
      </ThemeProvider>
    </div>
  );
}

export default App;
