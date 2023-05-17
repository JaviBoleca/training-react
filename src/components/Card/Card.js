import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <h2>
        {props.product} | <span>{props.price}</span>
      </h2>
      <ul>
        {props.categories.map((category,index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
};
export default Card;
