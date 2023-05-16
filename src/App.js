import styled from "styled-components";

import { useState } from "react";



const Title = styled.h1`

  font-size: 1.5em;

  text-align: center;

  color: AliceBlue;

  margin-bottom: 1em;

`;



const Wrapper = styled.section`

  font-size: 1.5em;

  padding: 4em;

  background-color: ${(props) =>

    props.darkTheme ? "DarkSlateGray" : "DarkOliveGreen"};

  text-align: center;

`;

const Paragraph = styled.p`

  background-color: DarkCyan;

  color: White;

  border-radius: 0.5rem;

  padding: 1em;

  margin-bottom: 1em;

`;

const Button = styled.button`

  border-radius: 0.3rem;

  background-color: LightBlue;

  padding: 1em 1.5em;

  font-size: 1.3rem;

  `;

const App = () => {

  

  const [darkTheme, setDarkTheme] = useState(false);

  return (

    <Wrapper darkTheme={darkTheme}>

      {" "}

      {/* darkTheme es prop, sino no se pone el props, cambiará de color */}

      <Title>Hello World!</Title>

      <Paragraph>

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, iure.

      </Paragraph>

      <Button onClick={() => setDarkTheme(!darkTheme)}>Change Theme</Button>

    </Wrapper>

  );

};



export default App;