import styled from "styled-components";
import { useState } from "react";

const Title = styled.h1`
  font-size: 3.5em;
  text-align: center;
  color: ${(props) => (props.darkTheme ? "AliceBlue" : "#282828")};
  margin-bottom: 1em;
  transition: all 0.25s ease-in;
`;

const Wrapper = styled.section`
  font-size: 1.5em;
  padding: 4em;
  background-color: ${(props) =>
    props.darkTheme ? "DarkSlateGray" : "DarkOliveGreen"};
  text-align: center;
  transition: all 0.25s ease-in;
`;

const Paragraph = styled.p`
  background-color: ${(props) => (props.darkTheme ? "Snow" : "DarkCyan")};
  color: ${(props) => (props.darkTheme ? "#282828" : "Snow")};
  padding: 1em;
  border-radius: 0.5rem;
  margin-bottom: 1em;
  transition: all 0.25s ease-in;
`;

const Button = styled.button`
  font-size: 1.3rem;
  border-radius: 0.3rem;
  background-color: ${(props) => (props.darkTheme ? "LightBlue" : "SteelBlue")};
  padding: 1em 1.5em;
  transition: all 0.25s ease-in;
`;

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <Wrapper darkTheme={darkTheme}>
      <Title darkTheme={darkTheme}>Hello World!</Title>
      <Paragraph darkTheme={darkTheme}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Paragraph>
      <Button darkTheme={darkTheme} onClick={() => setDarkTheme(!darkTheme)}>
        {darkTheme ? "Light Theme" : "Dark Theme"}
      </Button>
    </Wrapper>
  );
};

export default App;