import { Fragment } from "react";
import { useRef } from "react";

import Header from "../layout/Header";
import ItemList from "../layout/ItemList";
import Card from "../UI/Card";
import classes from "./TodoList.module.css";

const TodoList = () => {
  const value = useRef("");

  const onChangeHandler = (event) => {
    // value = event.target.value;
  };
  return (
    <Fragment>
      <div className={classes["main-container"]}>
        <div className={classes.todo}>
          <Header></Header>
          <Card className={`${classes["input-box"]}`}>
            <input
              ref={value}
              className={classes["input-field"]}
              autoFocus
              type="text"
              // value={value}
              placeholder="...add new task"
              onChange={onChangeHandler}
            />
          </Card>
          {/* <Card> */}
            <ItemList></ItemList>
          {/* </Card> */}
        </div>
      </div>
    </Fragment>
  );
};

export default TodoList;
