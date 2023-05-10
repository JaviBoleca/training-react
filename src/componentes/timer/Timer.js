import { useState, useEffect } from "react";

const timer = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setTime(time + 1);
    }, 1000);
  });
  return (
    <h1
      style={{
        color: "red",
        fontSize: "50px",
        textAlign: "center",
        backgroundColor: "blue",
      }}
    >
      Rendering {time} times
    </h1>
  );
};
export default timer;
