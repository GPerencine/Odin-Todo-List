// src/index.js
import {loadTasks} from "./tasks/tasks.js";
import "./tasks/taskModal.js";
import {loadNotes} from "./notes/notes.js";
import "./notes/noteModal.js";
import "./styles.css";
//import "./images/preview.png";

const content = document.querySelector("#content")
const projectList = document.querySelector("#project-list")
const btnTasks = document.querySelector("#Tasks")
const btnCalendar = document.querySelector("#calendar")
const btnNotes = document.querySelector("#notes")
const btnAddProject = document.querySelector("#project")

content.appendChild(loadTasks());

btnTasks.addEventListener('click', ()=>{
    content.innerHTML = '';
    content.appendChild(loadTasks());
});
btnCalendar.addEventListener('click', ()=>{
    content.innerHTML = ''
});
btnNotes.addEventListener('click', ()=>{
    content.innerHTML = ''
    content.appendChild(loadNotes());
});