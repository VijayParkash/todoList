import { useContext, useState } from "react";

import { TodoContext } from "../store/TodoContext";
import classes from "./TodoItem.module.css";

const TodoItem = ({ task, isEditing, setEditingId }) => {
  const [editTask, setEditTask] = useState(task.content);
  const [, dispatch] = useContext(TodoContext);

  const changeTaskHandler = (event) => {
    setEditTask(event.target.value);
  };

  const isTaskCompleted = () => {
    dispatch({ type: "taskCompleted", payload: task.id });
  };

  const editingTaskHandler = (event) => {
    if (event.keyCode === 13) {
      dispatch({
        type: "changeTask",
        payload: { id: task.id, content: event.target.value },
      });
      setEditingId(null);
    }

    if (event.keyCode === 27) {
      setEditTask(task.content);
      setEditingId(null);
    }
  };

  const taskDeleteHandler = () => {
    dispatch({ type: "deleteTask", payload: task.id });
  };
  return (
    <li className={classes.todoList}>
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={isTaskCompleted}
        />
        <label className={task.isCompleted ? classes.taskDone : ""}>
          {task.content}
        </label>
        {/* <div> */}
          {/* <button className={classes.btn} onClick={taskEditHandler}>
        edit
        </button> */}
          <button className={classes.btn} onClick={taskDeleteHandler}>
            x
          </button>
        {/* </div> */}
      {/* </div> */}
      {isEditing && (
        <input
          value={editTask}
          onChange={changeTaskHandler}
          onKeyDown={editingTaskHandler}
          autoFocus
        />
      )}
    </li>
  );
};

export default TodoItem;
