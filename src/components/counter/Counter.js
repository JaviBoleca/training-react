import React, { useState } from "react";
import "./Counter.css";
const App = () => {
  const [counter, setCounter] = useState(0);
 

  const handleClick = () => {
    setCounter(counter + 1);
  };
  const handleClick2 = () => {
    setCounter(counter * 5);
  };
  const handleClick3 = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="main">
      <h1>You clicked {counter} times!</h1>
      <button onClick={handleClick}>Click me!</button>
      <button onClick={handleClick2}>Multi5!</button>
      <button onClick={handleClick3}>Resta1!</button>
    </div>
  );
};

export default App;
