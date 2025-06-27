import React, { useReducer, useState } from "react";
import "../index.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

const TodoList = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      dispatch({ type: "ADD_TODO", payload: input });
      setInput("");
    }
  };

  return (
    <div className="todo-container">
      <div className="todo-input-wrapper">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task..."
          className="todo-input"
        />
        <button className="todo-add-btn" onClick={handleAdd}>
          Add
        </button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`todo-item ${todo.completed ? "completed" : ""}`}
          >
            <span className="todo-text">{todo.text}</span>
            <div className="todo-actions">
              <button
                className="todo-complete-btn"
                onClick={() =>
                  dispatch({ type: "TOGGLE_TODO", payload: todo.id })
                }
              >
                {todo.completed ? "Undo" : "Complete"}
              </button>
              <button
                className="todo-delete-btn"
                onClick={() =>
                  dispatch({ type: "DELETE_TODO", payload: todo.id })
                }
              >
                ✕
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
