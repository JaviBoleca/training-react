import Counter from "./componentes/Counter";
import "./App.css";
import BotOperators from "./componentes/botOperators";
import { useState } from "react";

const App = () => {
  const [num, setNum] = useState("");

  const handleSum = () => {
    setNum("hola");
  };
  const handleDiv = () => {
    // setNum(num / 5);
    console.log("División");
  };

  return (
    <>
      <div className="divStyle">
        <h1 style={{ color: "white" }}>SuperMachine! XP</h1>
      </div>
      <div>
        <Counter num={num} />
        <BotOperators botsum={handleSum} botdiv={handleDiv} />
      </div>
    </>
  );
};

export default App;
