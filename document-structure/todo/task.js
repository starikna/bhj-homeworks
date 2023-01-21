const input = document.querySelector(".tasks__input");
const taskList = document.querySelector(".tasks__list");


input.addEventListener("keyup", (e) => {
  if (input.value.length > 0) {
    if (e.keyCode === 13) {  
      e.preventDefault();
      addTask();
      input.value = "";
      removeTask();
    }
  }
});

function addTask () {
  let currentTask = document.createElement("div");
  currentTask.className = "task";
  taskList.appendChild(currentTask);
  console.log(currentTask);

  let taskContent = document.createElement("div");
  taskContent.className = "task__title";
  taskContent.textContent = `${input.value}`;
  currentTask.appendChild(taskContent);

  let taskRemoveLink = document.createElement("a");
  taskRemoveLink.className = "task__remove";
  taskRemoveLink.setAttribute("href", "#");
  taskRemoveLink.innerHTML = "&times;";
  currentTask.appendChild(taskRemoveLink);
}

function removeTask () {
  const taskListDeleteble = document.querySelectorAll(".task__remove");
  console.log(taskListDeleteble);
  taskListDeleteble.forEach((el) => {
    el.addEventListener("click", (e) => {
      const targetTask = e.target.closest(".task");
      targetTask.remove();
    })
  })
}