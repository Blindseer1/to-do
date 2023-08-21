import './style.css';
import toggleTheme from './themeToggle';
import { addTask } from './addTask';
import { toggleCheck } from './markTask';
console.log('work');
const changeTheme =document.querySelector('#theme');
const body=document.querySelector('body');
const content=document.querySelector('.content')


const taskButton=document.querySelector('.addTask');
taskButton.addEventListener('click',()=>

{content.appendChild(addTask())
    

})


let task=document.querySelector('li');

task.addEventListener('click',()=>toggleCheck(task));



changeTheme.addEventListener('click',()=>
    toggleTheme()
)
