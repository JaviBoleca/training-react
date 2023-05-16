import Counter from "./componentes/Counter";
import "./App.css";
import Boton from "./componentes/botOperators";
import BotonCalc from "./componentes/botCalc";
import { useState } from "react";

const App = () => {
  const [num, setNum] = useState("");

  const sumar1Clic = () => {
    setNum(num + 1);
  };
  const dividirContador = () => {
    setNum(num / 2);
  };
  const reiniciarContador = () => {
    setNum("");
  };
  //en este otro caso en vez de darle un valor a la variable num,
  //le damos una funcion que recibe como parametro el valor anterior de num
  //y devuelve el nuevo valor de num
  const calculadora = (val) => {
    setNum(num * val);
  };

  return (
    <>
      <div className="divStyle">
        <h1 style={{ color: "white" }}>SuperMachine! XP</h1>
      </div>
      <div>
        <Counter num={num} />
        <Boton texto="Clic" esBotonDeClic={true} manejarClic={sumar1Clic} />
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
        <BotonCalc manejarClicVal={calculadora}>
          5
        </BotonCalc>
      </div>
    </>
  );
};

export default App;
