import "./CardImg.css";

function CardImg(props) {
  
  return (
    <div className="img-container">
      <div className="img-wrapper">
        <img src={props.img.path} alt={props.img.text} />
        <span className="dot"></span>
      </div>
    </div>
  );
}

export default CardImg;
