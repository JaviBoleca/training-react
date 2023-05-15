import "./wrapp.css";

const Wrapp = (props) => {
  const poneBye = value => {
    return "Bye" === value;
  };

  return(
  <div className={`wrapp ${poneBye(props.children) ? "wrappBye" : null}`}>
    {props.children}
  </div>)
};
export default Wrapp;
