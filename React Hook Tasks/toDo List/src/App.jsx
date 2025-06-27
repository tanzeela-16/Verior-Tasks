import React from "react";
import TodoList from "./components/ToDoList";

const App = () => {
  return (
    <div className="app">
      <h1 className="heading">Task 2: Todo List with useReducer</h1>
      <TodoList />
    </div>
  );
};

export default App;
