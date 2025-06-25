function TodoItem({ todo, deleteTodo, toggleComplete }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleComplete(todo.id)} className="todo-text">
        {todo.text}
      </span>
      <div>
        <button onClick={() => toggleComplete(todo.id)} className="complete-btn">
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => deleteTodo(todo.id)} className="delete-btn">Delete</button>
      </div>
    </li>
  );
}

export default TodoItem;
