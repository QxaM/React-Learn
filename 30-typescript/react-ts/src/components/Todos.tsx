import { useContext } from "react";

import TodoItem from "./Todo";
import { TodosContext } from "../store/todos-context";

import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const { items, removeTodo } = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onDeleteItem={() => removeTodo(item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
