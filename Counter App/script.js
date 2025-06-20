let count = 0;
let incCount = 0;
let decCount = 0;

const countDisplay = document.getElementById("count");

// Create message display element
const messageDisplay = document.createElement("p");
messageDisplay.id = "action-message";

// Append message below the counter
document.querySelector(".container").appendChild(messageDisplay);

// Get buttons
const incrementBtn = document.querySelector(".increment");
const decrementBtn = document.querySelector(".decrement");
const resetBtn = document.querySelector(".reset");

function updateCounterAndMessage(action) {
  countDisplay.textContent = count;

  if (action === "increment") {
    incCount++;
    messageDisplay.textContent = `${incCount} incremented`;
  } else if (action === "decrement") {
    decCount++;
    messageDisplay.textContent = `${decCount} decremented`;
  } else if (action === "reset") {
    incCount = 0;
    decCount = 0;
    messageDisplay.textContent = `Reset to ${count}`;
  }
}

// Event Listeners
incrementBtn.addEventListener("click", () => {
  count++;
  updateCounterAndMessage("increment");
});

decrementBtn.addEventListener("click", () => {
  count--;
  updateCounterAndMessage("decrement");
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateCounterAndMessage("reset");
});

// Theme toggle logic
const toggleSwitch = document.getElementById("theme-toggle");
const themeLabel = document.getElementById("theme-label");
const body = document.body;

toggleSwitch.addEventListener("change", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");

  if (body.classList.contains("dark")) {
    themeLabel.textContent = "Dark Theme Mode";
  } else {
    themeLabel.textContent = "Light Theme Mode";
  }
});
