import classes from "./Todo.module.css";

const TodoItem: React.FC<{ text: string; onDeleteItem: () => void }> = ({
  text,
  onDeleteItem,
}) => {
  const handleDelete = () => {
    onDeleteItem();
  };

  return (
    <li className={classes.item}>
      <p>{text}</p>
      <button onClick={handleDelete}>Remove</button>
    </li>
  );
};

export default TodoItem;
