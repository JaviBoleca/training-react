import classes from './Item.module.css';

const Item = props => {

  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className={`${classes["task-item"]} ${props.even && classes.even}`} onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default Item;
