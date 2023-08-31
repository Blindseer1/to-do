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
