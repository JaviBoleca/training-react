import "./Character.css";

const Character = (props) => {
  const { name, age, role, enemy } = props;
  return (
    <div className="card">
      <ul>
        <li>
          <strong>name:</strong> {name}
        </li>
        <li>
          <strong>age:</strong> {age}
        </li>
        <li>
          <strong>role:</strong> {role}
        </li>
        <li>
          <strong>enemy:</strong> {enemy}
        </li>
      </ul>
    </div>
  );
};

export default Character;