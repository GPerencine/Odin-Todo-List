// src/index.js
import { loadTasks } from "./tasks.js";
import "./taskModal.js";
import "./styles.css";
//import "./images/preview.png";

const content = document.querySelector("#content")
const projectList = document.querySelector("#project-list")
const btnTasks = document.querySelector("#Tasks")
const btnWeek = document.querySelector("#week")
const btnNotes = document.querySelector("#notes")
const btnAddProject = document.querySelector("#project")

content.appendChild(loadTasks());

btnTasks.addEventListener('click', ()=>{
    content.innerHTML = '';
    content.appendChild(loadTasks());
});
btnWeek.addEventListener('click', ()=>{
    content.innerHTML = ''
});
btnNotes.addEventListener('click', ()=>{
    content.innerHTML = ''
});