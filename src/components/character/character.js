import "./character.css"

const Character = ({ name, age, enemys, father }) => {

return (
    <div className="main">
      <h1>characters</h1>
      <button onClick={handleClick}>Update person Info!</button>
    </div>
  );

  export default Character;