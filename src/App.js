// import "./App.css";
import Character from "./components/Characters/Character";
import resistance from "./db/db.json";

const App = () => {
  return (
    <>
      {resistance.map((character) => {
        return (
          <Character
            name={character.name}
            age={character.age}
            role={character.role}
            enemy={character.enemy}
          />
        );
      })}
    </>
  );
};

export default App;
