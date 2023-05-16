import Wrapp from "./componentes/wrapp";

const App = () => {
  return (
    <>
      <div>
        <Wrapp>
          <h1>Hello React</h1>
          <p>React is awesome!</p>
        </Wrapp>
      </div>
      <div>
        <Wrapp>
          Bye
        </Wrapp>
      </div>
    </>
  );
};
export default App;
