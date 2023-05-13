import "./botOperators.css";

const Boton = ({ texto, esBotonDeClic, manejarClic }) => {
  return (
    <div className="conteneBot">
      <button
        className={esBotonDeClic ? "boton-clic" : "boton-reiniciar"}
        onClick={manejarClic}
      >
        {texto}
      </button>
    </div>
  );
};
export default Boton;
