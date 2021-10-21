import { createContext, useReducer } from "react";

const TODO_TASKS = [
  {
    id: 1,
    content: "Learn Javascript",
    isCompleted: false,
  },
  {
    id: 2,
    content: "Learn React",
    isCompleted: false,
  },
  {
    id: 3,
    content: "Build a React App",
    isCompleted: false,
  },
];

if (!localStorage.getItem("isFirstVisit")) {
  localStorage.setItem("isFirstVisit", true);
  localStorage.setItem("tasks", JSON.stringify(TODO_TASKS));
}

const updateLocalStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const TodoContext = createContext();

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  filter: "all",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "addTask": {
      const newTask = {
        id: Math.random() * 10,
        content: action.payload,
        isCompleted: false,
      };
      updateLocalStorage([...state.tasks, newTask]);
      return { ...state, tasks: [...state.tasks, newTask] };
    }
    case "allCompleted": {
      const updatedTask = state.tasks.map((t) => ({
        ...t,
        isCompleted: action.payload,
      }));
      updateLocalStorage(updatedTask);
      return {
        ...state,
        tasks: updatedTask,
      };
    }
    case "changeTask": {
      const updatedTask = state.tasks.map((t) => {
        if (t.id === action.payload.id) {
          return { ...t, content: action.payload.content };
        }
        return t;
      });
      updateLocalStorage(updatedTask);
      return {
        ...state,
        tasks: updatedTask,
      };
    }
    case "filter": {
      return {
        ...state,
        filter: action.payload,
      };
    }
    case "taskCompleted": {
      const updatedTask = state.tasks.map((t) => {
        if (t.id === action.payload) {
          return { ...t, isCompleted: !t.isCompleted };
        }
        return t;
      });
      updateLocalStorage(updatedTask);
      return {
        ...state,
        tasks: updatedTask,
      };
    }
    case "deleteTask": {
      const updatedTask = state.tasks.filter((t) => t.id !== action.payload);
      updateLocalStorage(updatedTask);
      return {
        ...state,
        tasks: updatedTask,
      };
    }
    default:
      return state;
  }
};

const TodoProvider = (props) => {
  const value = useReducer(reducer, initialState);
  return <TodoContext.Provider value={value} {...props} />;
};

export { TodoContext, TodoProvider };
