


function toggleCheck(task)
{
    const svy=task.querySelector('.show');

    const svn=task.querySelector('.dont-show');
    svy.classList.remove('show');
    svy.classList.add('dont-show');

    svn.classList.add('show');
    svn.classList.remove('dont-show');
}

export {toggleCheck};

