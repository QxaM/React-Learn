import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosProvider from "./store/todos-context";

//const DUMMY_TODOS = [new Todo("Learn React"), new Todo("Learn TypeScript")];

function App() {
  return (
    <div className="App">
      <TodosProvider>
        <NewTodo />
        <Todos />
      </TodosProvider>
    </div>
  );
}

export default App;
