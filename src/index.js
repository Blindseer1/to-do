import './style.css';
import toggleTheme from './themeToggle';
import { addTask, showOnPage } from './addTask';
import { toggleCheck } from './markTask';
import { switchProject } from './switchProjects';
import createProj, { createFormProject, loadProject } from './addProject';
import { addDetails, changeDisplay } from './addDetails';
import { removeItem } from './removeItem';

const changeTheme =document.querySelector('#theme');
const body=document.querySelector('body');

const sidebar=document.querySelector('.sidebar')
const addProject=document.querySelector('.addProject')
const projectList=document.querySelector('.projectList')
const content=document.querySelector('.content');

if(localStorage.getItem('projects')!=null)
{
    projectList.innerHTML="";
    content.innerHTML=' ';
   
    let projStorage=JSON.parse(localStorage.getItem('projects'));
    for(let i=0;i<projStorage.length;i++)
        loadProject(projStorage[i].name,projStorage[i].index)
    
}
if(localStorage.getItem('tasks')!=null)
{
    let taskStorage=JSON.parse(localStorage.getItem('tasks'));
    for(let i=0;i<taskStorage.length;i++)
    {
        let taskList=document.querySelector(`[data-tasklist-index="${taskStorage[i].listIndex}"]`);
        showOnPage(taskStorage[i].index,taskStorage[i].name,taskStorage[i].date,taskStorage[i].priority,taskList)
        taskList.appendChild(addDetails(taskStorage[i].index,taskStorage[i].name,taskStorage[i].date,taskStorage[i].priority,taskStorage[i].description))
    }
}




addProject.addEventListener('click',()=>
{
   if(sidebar.querySelector('.formProject')==null)
   
    sidebar.appendChild(createFormProject());
}
)








changeTheme.addEventListener('click',()=>
    toggleTheme()
)
let projects=document.querySelectorAll('[data-project-index]')
console.log(projects)
projects.forEach(project=> project.addEventListener('click',()=>switchProject(project)))


