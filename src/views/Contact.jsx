import { Link, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Contact = () => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLogged(true);
    }, 3000);
  }, []);

  return (
    <>
      {isLogged && <Navigate to="/" />}
      <h2>
        Contact - <Link to="/survey">Survey</Link>
      </h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo,
        illum!
      </p>
    </>
  );
};

export default Contact;
