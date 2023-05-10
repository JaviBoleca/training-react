import React, { useState } from "react";

const Character = () => {
  const [person, setPersonInfo] = useState({
    name: "John",
    age: 27,
    enemys: ["Skynet", "T-800", "T-1000", "T-x"],
    father: "unknown",
  });

  const handleUpdateFather = () => {
    setPersonInfo({ ...person, father: "Kyle Reese" });
  };

  return (
    <div>
      <h1>{person.name}'s Information:</h1>
      <ul>
        <li>Name: {person.name}</li>
        <li>Age: {person.age}</li>
        <li>Enemies: {person.enemys.join(", ")}</li>
        <li>Father: {person.father}</li>
      </ul>
      <button onClick={handleUpdateFather}>Update Person Info</button>
    </div>
  );
};

export default Character;
