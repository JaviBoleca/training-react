import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  

  const handleClick = () => {
    setCounter(counter + 1);
   
  };

  return (
    <div className="main">
      <h1>You clicked {counter} times!</h1>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};

export default App;
