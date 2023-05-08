import Avengers from "./components/User/Avengers";
import Terminator from "./components/Characters/Terminator";
import SplitPane from "./components/Wrapper/SplitPane";

const App = () => {
  return (
    <>
      {/* <Avengers />
      <Terminator /> */}
      <SplitPane left={<Terminator />} right={<Avengers />} />
    </>
  );
};

export default App;