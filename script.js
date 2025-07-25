function addTask() {
  const input = document.getElementById("task-input");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const taskList = document.getElementById("task-list");

  const li = document.createElement("li");
  li.textContent = taskText;

  // Toggle Complete
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete Button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent toggle when clicking delete
    li.remove();
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  input.value = ""; // clear input
}