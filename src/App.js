import Counter from "./componentes/Counter";
import "./App.css";
import Boton from "./componentes/botOperators";
import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  const manejarClic = () => {
    setNum(num + 1);
  };
  const dividirContador = () => {
    setNum(num / 2);
  };
  const reiniciarContador = () => {
    setNum(0);
  };

  return (
    <>
      <div className="divStyle">
        <h1 style={{ color: "white" }}>SuperMachine! XP</h1>
      </div>
      <div>
        <Counter num={num} />
        <Boton texto="Clic" esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton
          texto="Dividir por 2"
          esBotonDeClic={true}
          manejarClic={dividirContador}
        />
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
       
      </div>
    </>
  );
};

export default App;
