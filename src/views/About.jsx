import { useParams, useSearchParams } from "react-router-dom"; // detecta el parametro de la url


const About = () => {
  const [searchParams, setSearchParams] = useSearchParams(); // detecta el parametro de la url
  for (const p of searchParams) {
    console.log(p);
  }
  console.log(searchParams.toString());
  const { id } = useParams(); // detecta el parametro de la url

  console.log(searchParams.get("name"));
  console.log(searchParams.get("age"));

  return (
    <>
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo,
        illum!
      </p>
      {id && <p>El id es: {id}</p>}
    </>
  );
};

export default About;
