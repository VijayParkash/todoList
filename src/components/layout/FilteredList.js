import classes from "./FilteredList.module.css";
import TodoItem from "./TodoItem";
const FilteredList = (props) => {
  return (
    <ul className={classes["todo-list"]}>
      {props.taskList.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          content={item.content}
          active={item.active}
          taskStatusHandler={()=>props.taskStatusHandler(item.id)}
        />
      ))}
      
    </ul>
  );
};

export default FilteredList;
