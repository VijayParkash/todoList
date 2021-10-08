import classes from "./Filter.module.css";
const Filter = (props) => {
  return (
    <div className={classes["filters"]}>
      <p>{props.countValue} task(s) left</p>
      <button onClick={() => props.filterTaskHandler("all")}>All</button>
      <button onClick={() => props.filterTaskHandler("active")}>Active</button>
      <button onClick={() => props.filterTaskHandler("completed")}>
        Completed
      </button>
      <button>clearAll</button>
    </div>
  );
};

export default Filter;
