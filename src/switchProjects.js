export function switchProject(project)
{
    let projectList=document.querySelector('.projectList');
    let content=document.querySelector('.content');

  
    let activeProject=projectList.querySelector('.show')
    activeProject.classList.remove('show');
    project.classList.add('show')

    let activeTabNum=activeProject.dataset.projectIndex ;
    let activeList= document.querySelector(`[data-tasklist-index="${activeTabNum}"]`) ;
    activeList.classList.remove('show')
    activeList.classList.add('dont-show')
   
 
   let tabNum=project.dataset.projectIndex ;
     const currList= document.querySelector(`[data-tasklist-index="${tabNum}"]`) ;
     currList.classList.remove('dont-show')
     currList.classList.add('show')

    

   
   
    
}
