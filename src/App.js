import TodoList from "./components/Todo/TodoList";
import classes from "./index.css"

function App() {
  return (
    <TodoList className={classes.centered}></TodoList>
  );
}

export default App;
