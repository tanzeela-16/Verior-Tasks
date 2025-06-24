let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((taskObj, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="${taskObj.completed ? 'completed' : ''}">
        ${taskObj.text}
      </span>
      <div class="btn-group">
        <button class="complete-btn" onclick="toggleComplete(${index})">
          ${taskObj.completed ? 'Undo' : 'Complete'}
        </button>
        <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
      </div>
    `;
    taskList.appendChild(li);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    tasks.push({ text: taskText, completed: false });
    taskInput.value = "";
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

// Initial render
renderTasks();
