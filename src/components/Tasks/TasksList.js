import Item from './Item';

const TasksList = props => {
  return (
    <ul className="task-list">
      {props.items.map((task, index) => (
        <Item
          key={task.id}
          id={task.id}
          onDelete={props.onDeleteItem}
          even={(index % 2) === 0}
        >
          {task.text}
        </Item>
      ))}
    </ul>
  );
};

export default TasksList;
