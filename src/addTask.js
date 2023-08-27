
import checkMark from './checked.png';
import { toggleCheck } from './markTask';




function closePop(task)
{
    task.classList.add('close-pop')
}
function createLabel(target,content)
{
    const element=document.createElement('label')
    element.htmlFor=`.${target}`;
    element.textContent=content;
    return element;
}

function createCircle()
{
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
     
     svg.setAttribute('fill',"black")
     svg.setAttribute('height','400px')
    svg.setAttribute('width',"400px")
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
     svg.setAttribute('viewbox',"0 0 330 330 ")
   svg.setAttribute('transform','scale(0.06,0.06)')
    svg.classList.add('circle')
    svg.classList.add('show')
   
     let newpath = document.createElementNS('http://www.w3.org/2000/svg',"path");
     newpath.setAttribute("d", "M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.982,0,165,0z M165,300 C90.561,300,30,239.44,30,165S90.561,30,165,30c74.439,0,135,60.561,135,135S239.439,300,165,300z") 

    svg.appendChild(newpath)
    return svg;
}

function createCheck()
{
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
     
    svg.setAttribute('fill',"none")
    svg.setAttribute('height','25px')
   svg.setAttribute('width',"25px")
   svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    svg.setAttribute('viewbox',"0 0 24 24 ")
    svg.classList.add('circle')

    const newPath=document.createElementNS('http://www.w3.org/2000/svg',"path");
    newPath.setAttribute('d',"M16.0303 10.0303C16.3232 9.73744 16.3232 9.26256 16.0303 8.96967C15.7374 8.67678 15.2626 8.67678 14.9697 8.96967L10.5 13.4393L9.03033 11.9697C8.73744 11.6768 8.26256 11.6768 7.96967 11.9697C7.67678 12.2626 7.67678 12.7374 7.96967 13.0303L9.96967 15.0303C10.2626 15.3232 10.7374 15.3232 11.0303 15.0303L16.0303 10.0303Z");
    newPath.setAttribute('fill','green');
    svg.appendChild(newPath);

    const secondPath=document.createElementNS('http://www.w3.org/2000/svg',"path");
    secondPath.setAttribute('fill-rule','evenodd');
    secondPath.setAttribute('clip-rule','evenodd')
    secondPath.setAttribute('d',"M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z")
    secondPath.setAttribute('fill','green')
    svg.appendChild(secondPath);

    svg.classList.add('dont-show')
    return svg;

}


function createTitle(title)
{
    let element=document.createElement('p');
    console.log(title)
    if(title=="")
    element.textContent="Unnamed";
    else
    element.textContent=title;
    return element;
}
function createDate(date)
{
    let element=document.createElement('p');
    if(date=="")
    element.textContent="No time limit";
    else
    element.textContent="Due "+date;
    return element;
}
function createPriority(priority)
{
    let element=document.createElement('p');
    element.textContent=priority;
    return element;
}



export function showOnPage(title,date,priority)
{
    const task=document.createElement('li');
    task.classList.add('task');
    
    
    task.appendChild(createCircle())
    task.appendChild(createCheck())
    task.appendChild(createTitle(title))
    task.appendChild(createDate(date))
    task.appendChild(createPriority(priority))

    let circles=task.querySelectorAll('.circle')
   circles.forEach(circle=>circle.addEventListener('click',()=>toggleCheck(task))) 
    return task;
}


 export function addTask()
 {
    const form=document.createElement('form')
    form.classList.add('formTask');
   
   
    let titleInput=document.createElement('input');
    
    titleInput.classList.add('titleInput')
    form.appendChild(createLabel(titleInput,"Task Title"));
    form.appendChild(titleInput)
   
    let descriptionInput=document.createElement('textarea');
    
    descriptionInput.classList.add('descriptionInput')
    form.appendChild( createLabel(descriptionInput,'Description')) 
    form.appendChild(descriptionInput);


    let dueDate=document.createElement('label');
    dueDate.htmlFor='.dueDateInput';
    dueDate.textContent="Due date";
   
    let dueDateInput=document.createElement('input');
   dueDateInput.type="date";
    dueDateInput.classList.add('dueDateInput')
    form.appendChild(dueDate);
    form.appendChild(dueDateInput);

    let priority=document.createElement('label');
    priority.htmlFor='.priorityInput';
    priority.textContent="Priority";
   
    let priorityInput=document.createElement('input');
    priorityInput.type="range";
    priorityInput.min=1;
    priorityInput.max=5;
    priorityInput.step=1;
    priorityInput.defaultValue=3;
    priorityInput.classList.add('priorityInput')

    form.appendChild(priority);
    form.appendChild(priorityInput);

    let output=document.createElement('p');
    output.innerHTML=priorityInput.value;
    form.appendChild(output)
    priorityInput.addEventListener('change',()=>
    {
        output.innerHTML=priorityInput.value;
    })
    
     const check=document.createElement('img');
     check.src=checkMark;
     check.classList.add('check')

    check.addEventListener('click',()=>
    {closePop(form)
      
        let title=titleInput.value;
       
        let dueDate=dueDateInput.value;
       
        let priority=priorityInput.value;
        const tasklist=document.querySelector('#taskList.show');
      
        tasklist.appendChild(showOnPage(title,dueDate,priority))
    }
    
  
    )


    form.appendChild(check)
    



    return form;
 }

