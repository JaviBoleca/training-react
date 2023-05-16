import "./calc.css";

const BotCalc = (props) => {
  return (
    <div className="conteneBotCal">
      <button
        className="botonSumarLibre"
        // la diferencia entre los otros clicks y este
        // es que aqui se pasa un valor como parametro
        // y por eso hace falta poner una funcion
        // despues de onclic y no solo el nombre de la funcion
        // ademas , si no se pone el ()=> entonces seri como llamar
        // a una funcion con un parametro y recibiriamos un valor, 
        // no enviarimos nada
        onClick={() => props.manejarClicVal(props.children)}
      >
        {/* aqui va el valor de props.children, que se vea el 5 */}
        {props.children}
      </button>
    </div>
  );
};
export default BotCalc;
