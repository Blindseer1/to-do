


let Detail=(text,value)=> 
{
    let firstSpan=document.createElement('span')
    let fp=document.createElement('p')
    fp.textContent=text;
    let sp=document.createElement('p')
    sp.textContent=value;
    firstSpan.appendChild(fp)
    firstSpan.appendChild(sp)

    let getSpan=()=>firstSpan;

    return{getSpan}
}

export function changeDisplay(task,tasklist)
{

   
    
    const taskTab=task.dataset.task;
    const detail=tasklist.querySelector(`[data-detail="${taskTab}"]`)
   
    task.classList.remove('show')
    task.classList.add('dont-show');
   detail.classList.remove('dont-show')
   detail.classList.add('show');
   
   
   
    detail.addEventListener('click',()=>
    {
        detail.classList.remove('show')
        detail.classList.add('dont-show');
        task.classList.remove('dont-show')
        task.classList.add('show');
    })
    
  

}



export function addDetails(index,name,date,priority,descr)
{
    let element =document.createElement('li');
    element.classList.add('details')
    element.classList.add('dont-show')
   element.dataset.detail=index;

let firstSpan=Detail("Name:",name).getSpan()
let secondSpan=Detail('Due Date:',date).getSpan()
let thirdSpan=Detail('Priority',priority).getSpan()
let fourthSpan=Detail("Description",descr).getSpan()
fourthSpan.setAttribute('id','descr')

element.appendChild(firstSpan)
element.appendChild(secondSpan)
element.appendChild(thirdSpan)
element.appendChild(fourthSpan)

return element;
}

