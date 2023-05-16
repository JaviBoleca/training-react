import styled from "styled-components";
import { useState } from "react";

const Title = styled.h1`
  font-size: 3.5em;
  text-align: center;
  color: ${(props) => (props.darkTheme ? "AliceBlue" : "#282828")};
  margin-bottom: 1em;
  transition: all 0.25s ease-in;
`;

const Wrapper = styled.section.attrs((props) => ({
  id: "header",
  size: props.size || "1.3em",
  className: props.darkTheme && "dark",
  title: props.title || "header section",
}))`
  &:hover h1 {
    color: ${(props) => (props.darkTheme ? "PapayaWhip" : "PeachPuff")};
  }
  h2 {
    background-color: ${(props) =>
      props.darkTheme ? "PapayaWhip" : "PeachPuff"};
    border-radius: 0.5rem;
    margin-bottom: 1.5em;
  }
  font-size: ${(props) => props.size};
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
    <Wrapper darkTheme={darkTheme} size="1.5em" title="Main Section">
      <Title darkTheme={darkTheme}>Hello World!</Title>
      <h2>Styled Components</h2>
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