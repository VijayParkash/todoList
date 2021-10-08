import { Fragment, useState, useEffect } from "react";

import FilteredList from "./FilteredList";
import Filter from "./Filter";

const TODO_TASKS = [
  { id: 0, active: true, content: "first Task" },
  { id: 1, active: false, content: "Second Task" },
  { id: 2, active: true, content: "Third Task" },
];

const ItemList = () => {
  const toDoList = JSON.parse(localStorage.getItem("toDoArray")) || [];

  const [filter, setFilter] = useState("all");
  const [taskList, setTaskList] = useState(toDoList);
  const [count, setCount] = useState(0);

  const updateLocalStorage = () => {
    localStorage.setItem("toDoArray", JSON.stringify(TODO_TASKS));
  };
  const taskStatusHandler = (taskId) => {
    console.log(taskId);
    let updatedList = taskList.map((ele) => {
      if (ele.id === taskId) {
        return { ...ele, active: !ele.active };
      }
      return ele;
    });

    updateLocalStorage();
    setTaskList(updatedList);
  };

  useEffect(() => {
    setCount(() => {
      return taskList.reduce((count, task) => {
        if (task.active) {
          count++;
        }
        return count;
      }, 0);
    });
  }, [taskList]);

  const filterTaskHandler = (filter) => {
    setFilter(filter);
  };

  useEffect(() => {
    if (filter === "all") {
      setFilter("all");
      setTaskList(toDoList);
      return;
    } else if (filter === "active") {
      setFilter("active");
      setTaskList(() => {
        return toDoList.filter((task) => task.active === true);
      });
      return;
    } else if (filter === "completed") {
      setFilter("completed");
      setTaskList(() => {
        return toDoList.filter((task) => task.active === false);
      });
      return;
    }
  }, [filter]);

  return (
    <Fragment>
      <FilteredList
        taskList={taskList}
        taskStatusHandler={taskStatusHandler}
      ></FilteredList>
      <Filter countValue={count} filterTaskHandler={filterTaskHandler}></Filter>
    </Fragment>
  );
};

export default ItemList;
