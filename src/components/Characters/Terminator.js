import resistance from "../../db/resistance.json";
import Character from "./Character";

const Terminator = () => {
  return (
    <>
      {resistance.map((character, index) => {
        return (
          <Character
            key={index}
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

export default Terminator;
