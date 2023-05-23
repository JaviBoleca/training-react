import Item from "./Item";

const TasksList = (props) => {
  return (
    <ul className="task-list">
      {Object.keys(props.items).map((key, index) => (
        <Item
          key={key}
          id={key}
          title={props.items[key].text}
          even={index % 2 === 0}
          onEdit={props.onEditItem}
          onDelete={props.onDeleteItem}
        />
      ))}
    </ul>
  );
};

export default TasksList;
