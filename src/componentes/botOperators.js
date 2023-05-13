import "./botOperators.css";

const BotOperators = ({ botSum,botDiv }) => {
  return (
    <div className="conteneBot">
      <button className="styleSum" onClick={botSum}>
        Botón de Suma
      </button>
      <button className="styleDiv" onClick={botDiv}>
        Botón de División
      </button>
    </div>
  );
};

export default BotOperators;
