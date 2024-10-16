import { useRef, useContext } from "react";

import { TodosContext } from "../store/todos-context";

import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todoInput = useRef<HTMLInputElement>(null);
  const { addTodo } = useContext(TodosContext);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoInput.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    addTodo(enteredText);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input id="text" type="text" ref={todoInput} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
