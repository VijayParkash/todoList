import { TodoProvider } from "./components/store/TodoContext";
import TodoList from "./components/Todo/TodoList";
import classes from "./index.css";

function App() {
  return (
    <TodoProvider>
      <TodoList className={classes.centered}></TodoList>
    </TodoProvider>
  );
}

export default App;
