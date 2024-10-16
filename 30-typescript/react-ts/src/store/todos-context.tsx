import { useState, createContext } from "react";

import Todo from "../models/todo";

type TodosContextObject = {
  items: Todo[];
  addTodo: (enteredText: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = createContext<TodosContextObject>({
  items: [],
  addTodo: () => {},
  removeTodo: () => {},
});

const TodosProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (enteredText: string) => {
    const newTodo = new Todo(enteredText);
    setTodos((previousTodos) => [...previousTodos, newTodo]);
  };

  const removeTodo = (id: string) => {
    setTodos((previousTodos) => previousTodos.filter((todo) => todo.id !== id));
  };

  const contextValues = {
    items: todos,
    addTodo,
    removeTodo,
  };

  return (
    <TodosContext.Provider value={contextValues}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
