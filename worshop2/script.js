function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();

  if (text === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit";

  editBtn.onclick = () => {
    const newText = prompt("Edit your task:", span.textContent);

    if (newText !== null && newText.trim() !== "") {
      span.textContent = newText;
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete";

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });
  document.getElementById("taskList").appendChild(li);
  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  input.value = "";
}
