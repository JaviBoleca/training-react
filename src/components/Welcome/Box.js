import "./Box.css";

const Box = (props) => {
  return <div className="wrapper">{props.children}</div>;
};

export default Box;
