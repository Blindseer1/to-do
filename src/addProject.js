

import checkMark from './checked.png'
import { switchProject } from './switchProjects';

let index;


let storeProjects=[
    {
        name:'Default Project',
        index:1
    },
    {
        name:'Default Project',
        index:2
    }
];
if(localStorage.getItem('projects')!=null)
{
    storeProjects=JSON.parse(localStorage.getItem('projects'));
    index=Object.keys(storeProjects).length+1;

}else index=3;

function addCount(index)
{
    index++;
}


function createObj(title,index)
{
    let obj={}
    obj.name=title;
    obj.index=index;
    storeProjects.push(obj)
                
}



function createProject(input,index)
{
    let element=document.createElement('li')
    element.classList.add('project');
    
    element.textContent=`${input}`;
   
    element.dataset.projectIndex=index;
    return element;
}


function addProject(input,index)
{
  
   localStorage.setItem('projects',JSON.stringify(storeProjects));

   let container=document.querySelector('.projectList')
   container.appendChild(createProject(input,index))
   
   let project=document.querySelector(`[data-project-index="${index}"]`)
   createList(index)
   if(index==1)
    {project.classList.add('show')
let list=document.querySelector(`[data-tasklist-index="${index}"]`)
list.classList.remove('dont-show')
list.classList.add('show')}
   
   project.addEventListener('click',()=>switchProject(project))

  addCount(index)
}

function createList(index)
{
    let element=document.createElement('ul')
    element.setAttribute('id','taskList')
    element.dataset.tasklistIndex=index;
    element.classList.add('dont-show')
const content=document.querySelector('.content')
content.appendChild(element)

}



export function loadProject(input,indexP)
{
    addProject(input,indexP)
        
        let project=document.querySelector(`[data-project-index="${indexP}"]`)
      
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
        createObj(v,index);
       addProject(v,index);
        index++;
        let project=document.querySelector(`[data-project-index="${index-1}"]`)
        switchProject(project)
     

    })
   form.appendChild(check)

    return form;

    
}
