import "./wrapp.css";

const Wrapp = (props) => {
  const poneBye = value => {
    return value === "Bye";
  };
//aqui se añade la clase wrapp, y además si al llamar a poneBye, 
//props.children (que pasa a ser value, 
//que es parametro de poneBye) es igual a "Bye", 
//entonces se añade wrappBye, si no, no se añade nada
  return(
  <div className={`wrapp ${poneBye(props.children) ? "wrappBye" : null}`.trimEnd()}>
    {props.children}
  </div>)
};
export default Wrapp;
