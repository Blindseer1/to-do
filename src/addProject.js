

import checkMark from './checked.png'
import { switchProject } from './switchProjects';

let i=3;

function createProject(input)
{
    let element=document.createElement('li')
    element.classList.add('project');
    
    element.textContent=`${input}`;
   
    element.dataset.projectIndex=i;
    return element;
}

function createList()
{
    let element=document.createElement('ul')
    element.setAttribute('id','taskList')
    element.dataset.tasklistIndex=i;
    element.classList.add('dont-show')
const content=document.querySelector('.content')
content.appendChild(element)

    console.log(element)
}


export function createFormProject()
{
    const form=document.createElement('form');
    form.classList.add('formProject');

    let input=document.createElement('input');
    form.appendChild(input)
    input.maxLength=15;
    let check=document.createElement('img')
    check.src=checkMark;
    check.classList.add('project-check')
    check.addEventListener('click',()=>
    {
  
       
       
        let v=input.value;
      
        form.remove()
        
        let container=document.querySelector('.projectList')
        container.appendChild(createProject(v))

        let project=document.querySelector(`[data-project-index="${i}"]`)
        createList()
        switchProject(project)
        project.addEventListener('click',()=>switchProject(project))
        i++

    })
   form.appendChild(check)

    return form;

    
}
