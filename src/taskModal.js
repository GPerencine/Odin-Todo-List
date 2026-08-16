// src/taskModal.js
import {Task, renderTask, addTask, updateTask} from "./taskManager.js";

const taskModal = document.querySelector("#task-modal");
const btnCloseModal = document.querySelector("#btn-close-modal");
const taskForm = document.querySelector("#task-form");
const modalTitle = document.querySelector("#task-modal h3");

document.addEventListener("click", (event) => {
  if (event.target.closest("#addTask")) {
    modalTitle.textContent = "Add new task";
    delete taskForm.dataset.editingId;
    taskForm.reset()
    taskModal.showModal();
  }
});
btnCloseModal.addEventListener("click", () => taskModal.close());
    
taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const dueDate = document.querySelector('#due-date').value;
    const priority = document.querySelector('input[name="priority"]:checked').value;


    if (modalTitle.textContent === "Add new task") {
      const task = new Task(title, description, dueDate, priority);
      addTask(task);
      renderTask(task);
    }else{
      updateTask(taskForm.dataset.editingId, {title, description, dueDate, priority})
      delete taskForm.dataset.editingId;
    }

    taskModal.close();
    taskForm.reset();
});