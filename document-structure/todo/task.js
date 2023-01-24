const input = document.querySelector(".tasks__input");
const taskList = document.querySelector(".tasks__list");
const taskAdd = document.querySelector(".tasks__add");

taskAdd.addEventListener("click", (e) => {
  if (input.value.trim() !== "") {
      addTask();
  }
  e.preventDefault();
  input.value = "";
});

function addTask () {
  let currentTask = document.createElement("div")
  currentTask.setAttribute("class", "task");
 
  taskList.appendChild(currentTask);
  let text = input.value;
  
  currentTask.innerHTML = `<div class="task__title">${text}</div><a href="#" class="task__remove">&times;</a>`;
  currentTask.querySelector(".task__remove").addEventListener("click", (e) => {
    e.target.closest(".task").remove();
  });
}