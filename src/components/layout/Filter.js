import { useContext } from "react";

import classes from "./Filter.module.css";
import { TodoContext } from "../store/TodoContext";
import Card from "../UI/Card";

const Filter = (props) => {
  const [{ tasks, filter }, dispatch] = useContext(TodoContext);

  const activeCount = tasks.reduce((count, task) => {
    if (!task.isCompleted) {
      count++;
    }
    return count;
  }, 0);

  const pendingTasks = `${activeCount}${
    activeCount > 1 ? " tasks" : " task"
  } left`;

  const filterTaskHandler = (event, filter) => {
    event.preventDefault();
    dispatch({ type: "filter", payload: filter });
  };

  return (
    <Card className={`${classes.footer} ${classes.flexbox}`}>
      <p>{pendingTasks}</p>
      <div className={`${classes.flexbox} ${classes.filters} }`}>
        <button
          className={`${classes.btn} ${filter === "all" ? classes.active : ""}`}
          onClick={(event) => filterTaskHandler(event, "all")}
        >
          All
        </button>
        <button
          className={`${classes.btn} ${
            filter === "active" ? classes.active : ""
          }`}
          onClick={(event) => filterTaskHandler(event, "active")}
        >
          Active
        </button>
        <button
          className={`${classes.btn} ${
            filter === "completed" ? classes.active : ""
          }`}
          onClick={(event) => filterTaskHandler(event, "completed")}
        >
          Completed
        </button>
      </div>
    </Card>
  );
};

export default Filter;
