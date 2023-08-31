import './style.css';
import toggleTheme from './themeToggle';
import { addTask } from './addTask';
import { toggleCheck } from './markTask';
import { switchProject } from './switchProjects';
import { createFormProject } from './addProject';
import { changeDisplay } from './addDetails';

const changeTheme =document.querySelector('#theme');
const body=document.querySelector('body');
const content=document.querySelector('.content')
const sidebar=document.querySelector('.sidebar')
const addProject=document.querySelector('.addProject')


addProject.addEventListener('click',()=>
{
   if(sidebar.querySelector('.formProject')==null)
   
    sidebar.appendChild(createFormProject());
}
)

const taskButton=document.querySelector('.addTask');
taskButton.addEventListener('click',()=>

{content.appendChild(addTask())
    

})

let tasklist=document.querySelector('#taskList')
let task=tasklist.querySelector('.task');
let circles=document.querySelectorAll('.circle')

circles.forEach(circle=>circle.addEventListener('click',()=>toggleCheck(task)))

const detailButton=task.querySelector('#detailButton')

detailButton.addEventListener('click',()=>changeDisplay(task,tasklist))
console.log(detailButton)


changeTheme.addEventListener('click',()=>
    toggleTheme()
)
let projects=document.querySelectorAll('[data-project-index]')
console.log(projects)
projects.forEach(project=> project.addEventListener('click',()=>switchProject(project)))

