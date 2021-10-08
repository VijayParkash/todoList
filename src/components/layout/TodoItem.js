import checkbox from "../../assets/checkbox.svg";
import classes from "./TodoItem.module.css";
const TodoItem = (props) => {
  return (
    <li className={classes["todo-item"]} key={props.id}>
      <button
        className={`${classes.btn} ${classes["checkbox-circle"]} ${
          !props.active ? classes["checkbox-checked"] : ""
        } ${!props.active ? classes["checkbox"] : ""}`}
        checked={props.active}
        onClick={() => props.taskStatusHandler(props.id)}
      >
        <img src={checkbox} alt="checkbox" />
      </button>
      <p className={!props.active ? classes["task-done"] : ""}>
        {props.content}
      </p>
    </li>
  );
};

export default TodoItem;
