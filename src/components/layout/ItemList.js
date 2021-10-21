import { Fragment, useState, useContext } from "react";

import Filter from "./Filter";
import { TodoContext } from "../store/TodoContext";
import TodoItem from "./TodoItem";
import classes from "./ItemList.module.css";

const ItemList = () => {

  const [{ tasks, filter }] = useContext(TodoContext);
  const [editingId, setEditingId] = useState(null);

  const filteredTasks = () => {
    if (filter === "active") {
      return tasks.filter((task) => !task.isCompleted);
    } else if (filter === "completed") {
      return tasks.filter((task) => task.isCompleted);
    }
    return tasks;
  };

  const visibleTasks = filteredTasks();

  // const isAllTaskCompleted = tasks.every((t) => t.isCompleted);
  // console.log(isAllTaskCompleted);
  // const allTaskSelectedHandler = (event) => {
  //   dispatch({ type: "allCompleted", payload: event.target.checked });
  // };

  return (
    <Fragment>
      {/* <input
        type="checkbox"
        checked={isAllTaskCompleted}
        onChange={allTaskSelectedHandler}
      /> */}
      <ul className={classes.todoList}>
        {visibleTasks.map((item) => (
          <TodoItem
            key={item.id}
            task={item}
            isEditing={editingId === item.id}
            setEditingId={setEditingId}
          />
        ))}
      </ul>
      <Filter></Filter>
    </Fragment>
  );
};

export default ItemList;
