import { Fragment, useContext, useState } from "react";

import Header from "../layout/Header";
import ItemList from "../layout/ItemList";
import { TodoContext } from "../store/TodoContext";
import Card from "../UI/Card";
import classes from "./TodoList.module.css";

const TodoList = () => {
  const [inputTask, setInputTask] = useState("");
  const [, dispatch] = useContext(TodoContext);

  const onChangeHandler = (event) => {
    setInputTask(event.target.value);
  };

  const keydownHandler = (event) => {
    if (event.keyCode === 13 && inputTask.trim().length > 0) {
      dispatch({ type: "addTask", payload: inputTask });
      setInputTask("");
    }
  };
  return (
    <Fragment>
      <div className={classes["main-container"]}>
        <div className={classes.todo}>
          <Header></Header>
          <Card className={`${classes["input-box"]}`}>
            <input
              className={classes["input-field"]}
              autoFocus
              type="text"
              value={inputTask}
              placeholder="...add new task"
              onChange={onChangeHandler}
              onKeyDown={keydownHandler}
            />
          </Card>
          <ItemList></ItemList>
        </div>
      </div>
    </Fragment>
  );
};

export default TodoList;
