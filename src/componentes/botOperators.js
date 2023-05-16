import "./botOperators.css";

const Boton = ({ texto, esBotonDeClic, manejarClic }) => {
  return (
    <div className="conteneBot">
      <button
        className={esBotonDeClic ? "boton-clic" : "boton-reiniciar"}
        onClick={manejarClic}
      >
        {/* aqui hace falta poner el texto para que se sepa a cual 
        de los tres botones se esta llamando desde manejarClic */}
        {texto}
      </button>
    </div>
  );
};

export default Boton;

