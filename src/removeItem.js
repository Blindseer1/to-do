export function removeItem(item,tasklist)
{
    const taskData=item.dataset.task;
    const detail=tasklist.querySelector(`[data-detail="${taskData}"]`)
    item.remove();
    detail.remove();
  let storeTasks=JSON.parse(localStorage.getItem('tasks'));
  let element=storeTasks.filter(obj=>obj.index==taskData);

  let ans=storeTasks.findIndex(e=>e.index==taskData)
  console.log(ans);

  console.log(element);
  console.log(storeTasks.indexOf())
   storeTasks.splice(ans,1);
  
 localStorage.setItem('tasks',JSON.stringify(storeTasks))
}
