
import checkMark from './checked.png';
import { toggleCheck } from './markTask';
import { addDetails } from './addDetails';
import { changeDisplay } from './addDetails';
import { removeItem } from './removeItem';

let index;

let storeTasks=[
   
];


if(localStorage.getItem('tasks')!=null)
{
    storeTasks=JSON.parse(localStorage.getItem('tasks'));
    index=storeTasks.length;
}
else index=1;
       
function closePop(task)
{
    task.classList.add('close-pop')
}
function createLabel(target,content)
{
    const element=document.createElement('label')
    element.htmlFor=`${target}`;
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

function createMoreSVG()
{
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
     
    svg.setAttribute('fill',"none")
    svg.setAttribute('height','25px')
   svg.setAttribute('width',"25px")
   svg.setAttribute('id','detailButton')


   const newPath=document.createElementNS('http://www.w3.org/2000/svg',"path");
   newPath.setAttribute('d','M7 12.5C7.27614 12.5 7.5 12.2761 7.5 12C7.5 11.7239 7.27614 11.5 7 11.5C6.72386 11.5 6.5 11.7239 6.5 12C6.5 12.2761 6.72386 12.5 7 12.5Z')
   newPath.setAttribute('fill','var(--bord-color)') 
    newPath.setAttribute('stroke-width','1.5')
    newPath.setAttribute('stroke-linecap','round')
    newPath.setAttribute('stroke-linejoin','round')
    newPath.setAttribute('stroke','var(--bord-color)')
    svg.appendChild(newPath);
    const secondPath=document.createElementNS('http://www.w3.org/2000/svg',"path");
    secondPath.setAttribute('d','M12 12.5C12.2761 12.5 12.5 12.2761 12.5 12C12.5 11.7239 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.7239 11.5 12C11.5 12.2761 11.7239 12.5 12 12.5Z')
    secondPath.setAttribute('fill','var(--bord-color)') 
    secondPath.setAttribute('stroke-width','1.5')
    secondPath.setAttribute('stroke-linecap','round')
    secondPath.setAttribute('stroke-linejoin','round')
    secondPath.setAttribute('stroke','var(--bord-color)')
    svg.appendChild(secondPath);
    const thirdPath=document.createElementNS('http://www.w3.org/2000/svg',"path");
    thirdPath.setAttribute('d','M17 12.5C17.2761 12.5 17.5 12.2761 17.5 12C17.5 11.7239 17.2761 11.5 17 11.5C16.7239 11.5 16.5 11.7239 16.5 12C16.5 12.2761 16.7239 12.5 17 12.5Z')
    thirdPath.setAttribute('fill','var(--bord-color)') 
    thirdPath.setAttribute('stroke-width','1.5')
    thirdPath.setAttribute('stroke-linecap','round')
    thirdPath.setAttribute('stroke-linejoin','round')
    thirdPath.setAttribute('stroke','var(--bord-color)')
    svg.appendChild(thirdPath);
    const fourthPath=document.createElementNS('http://www.w3.org/2000/svg',"path");
    fourthPath.setAttribute('d','M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z')
    
    fourthPath.setAttribute('stroke-width','1.5')
    fourthPath.setAttribute('stroke-linecap','round')
    fourthPath.setAttribute('stroke-linejoin','round')
    fourthPath.setAttribute('stroke','var(--bord-color)')
    svg.appendChild(fourthPath);

    
    return svg;
}

function createTrash()
{
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
     
    svg.setAttribute('fill',"#000000")
    svg.setAttribute('height','20px')
   svg.setAttribute('width',"20px")
   svg.setAttribute('viewBox','-7.29 0 122.88 122.88')
   svg.setAttribute('id','trash')

   const newPath=document.createElementNS('http://www.w3.org/2000/svg',"path");
   newPath.setAttribute('d','M77.4,49.1h-5.94v56.09h5.94V49.1L77.4,49.1L77.4,49.1z M6.06,9.06h32.16V6.2c0-0.1,0-0.19,0.01-0.29 c0.13-2.85,2.22-5.25,5.01-5.79C43.97-0.02,44.64,0,45.38,0H63.9c0.25,0,0.49-0.01,0.73,0.02c1.58,0.08,3.02,0.76,4.06,1.81 c1.03,1.03,1.69,2.43,1.79,3.98c0.01,0.18,0.02,0.37,0.02,0.55v2.7H103c0.44,0,0.75,0.01,1.19,0.08c2.21,0.36,3.88,2.13,4.07,4.37 c0.02,0.24,0.03,0.47,0.03,0.71v10.54c0,1.47-1.19,2.66-2.67,2.66H2.67C1.19,27.43,0,26.23,0,24.76V24.7v-9.91 C0,10.64,2.04,9.06,6.06,9.06L6.06,9.06z M58.07,49.1h-5.95v56.09h5.95V49.1L58.07,49.1L58.07,49.1z M38.74,49.1H32.8v56.09h5.95 V49.1L38.74,49.1L38.74,49.1z M10.74,31.57h87.09c0.36,0.02,0.66,0.04,1.03,0.1c1.25,0.21,2.4,0.81,3.27,1.66 c1.01,1,1.67,2.34,1.7,3.83c0,0.31-0.03,0.63-0.06,0.95l-7.33,78.66c-0.1,1.03-0.27,1.95-0.79,2.92c-1.01,1.88-2.88,3.19-5.2,3.19 H18.4c-0.55,0-1.05,0-1.59-0.08c-0.22-0.03-0.43-0.08-0.64-0.14c-0.31-0.09-0.62-0.21-0.91-0.35c-0.27-0.13-0.52-0.27-0.78-0.45 c-1.51-1.04-2.51-2.78-2.69-4.72L4.5,37.88c-0.02-0.25-0.04-0.52-0.04-0.77c0.05-1.48,0.7-2.8,1.7-3.79 c0.88-0.86,2.06-1.47,3.33-1.67C9.9,31.59,10.34,31.57,10.74,31.57L10.74,31.57z M97.75,36.9H10.6c-0.57,0-0.84,0.1-0.79,0.7 l7.27,79.05h0l0,0.01c0.03,0.38,0.2,0.69,0.45,0.83l0,0l0.08,0.03l0.06,0.01l0.08,0h72.69c0.6,0,0.67-0.84,0.71-1.28l7.34-78.71 C98.53,37.04,98.23,36.9,97.75,36.9L97.75,36.9z')
   newPath.setAttribute('fill','var(--bord-color)') 
   svg.appendChild(newPath);

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




export function showOnPage(index,title,date,priority,tasklist)
{
    const task=document.createElement('li');
    task.classList.add('task');
    task.classList.add('show');
    task.dataset.task=index;
    task.appendChild(createCircle())
    task.appendChild(createCheck())
    task.appendChild(createTitle(title))
    task.appendChild(createDate(date))
    task.appendChild(createMoreSVG())
    task.appendChild(createTrash())
    if(priority==1 || priority==2)
        task.classList.add('green');
        else if(priority==4 || priority==5)
        {
            task.classList.add('red')
        }
        else
        task.classList.add('yellow');
   

    let circles=task.querySelectorAll('.circle')
   circles.forEach(circle=>circle.addEventListener('click',()=>toggleCheck(task))) 

   let moreSvg=task.querySelector('#detailButton')
   moreSvg.addEventListener('click',()=>changeDisplay(task,tasklist))
  

   let trashSvg=task.querySelector('#trash')
   trashSvg.addEventListener('click',()=>removeItem(task,tasklist))

   tasklist.appendChild(task)
}

let titleValue
let dueDateValue
let priorityValue
let descrValue

function createForm()
{
    const form=document.createElement('form')
    form.classList.add('formTask');
   
    
    let titleInput=document.createElement('input');
    titleInput.setAttribute('id','titleInput')
    form.appendChild(createLabel('titleInput',"Task Title"));
    form.appendChild(titleInput)
   
    let descriptionInput=document.createElement('textarea');
    descriptionInput.setAttribute('id','descriptionInput')
    form.appendChild( createLabel('descriptionInput','Description')) 
    form.appendChild(descriptionInput);


    let dueDate=document.createElement('label');
    dueDate.htmlFor='dueDateInput';
    dueDate.textContent="Due date";
    let dueDateInput=document.createElement('input');
    dueDateInput.type="date";
    dueDateInput.setAttribute('id','dueDateInput')
    form.appendChild(dueDate);
    form.appendChild(dueDateInput);

    let priority=document.createElement('label');
    priority.htmlFor='priorityInput';
    priority.textContent="Priority";
    let priorityInput=document.createElement('input');
    priorityInput.type="range";
    priorityInput.min=1;
    priorityInput.max=5;
    priorityInput.step=1;
    priorityInput.defaultValue=3;
    priorityInput.setAttribute('id','priorityInput')
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
      
         titleValue=titleInput.value;
         dueDateValue=dueDateInput.value;
       
         priorityValue=priorityInput.value;

         descrValue=descriptionInput.value;
         const tasklist=document.querySelector('#taskList.show');
         let listIndex=tasklist.dataset.tasklistIndex;
        addTask(tasklist,listIndex,titleValue,dueDateValue,priorityValue,descrValue,)
   })
   form.appendChild(check)

return form;
  

 
 }
 const content=document.querySelector('.content')
 const taskButton=document.querySelector('.addTask');
    
   taskButton.addEventListener('click',()=>
   
   {content.appendChild(createForm())
       
   
   })

 export function addTask(tasklist,listIndex,titleValue,dueDateValue,priorityValue,descrValue)
 {
   
   
        function createObj(listIndex,index,title,date,priority,description)
        {
            let obj={}
            obj.listIndex=listIndex,
            obj.index=index,
            obj.name=title,
            obj.date=date,
            obj.priority=priority,
            obj.description=description
            return obj;
        }

       

        storeTasks.push(createObj(listIndex,index,titleValue,dueDateValue,priorityValue,descrValue))
        localStorage.setItem('tasks',JSON.stringify(storeTasks));
      
  
        

      
        showOnPage(index,titleValue,dueDateValue,priorityValue,tasklist)
        tasklist.appendChild(addDetails(index,titleValue,dueDateValue,priorityValue,descrValue))
        index++;

    
  
    


    
    



    return createForm();
 }

