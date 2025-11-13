document.getElementById('addBtn').addEventListener('click', addTask);
function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = taskText;

  const actions = document.createElement('div');
  actions.className = 'action-btns';

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.className = 'edit-btn';
  editBtn.onclick = () => editTask(span);

  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.onclick = () => li.remove();

  actions.appendChild(editBtn);
  actions.appendChild(delBtn);

  li.appendChild(span);
  li.appendChild(actions);

  document.getElementById('taskList').appendChild(li);
  input.value = "";
}
function editTask(span) {
  const newText = prompt("Edit task:", span.textContent);
  if (newText !== null && newText.trim() !== "") {
    span.textContent = newText.trim();
  }
}