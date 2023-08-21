

const body=document.querySelector('body')
export default function toggleTheme()
{
    if(body.className=="white-theme")
    {
        body.classList.remove("white-theme");
        body.classList.add('black-theme');
    }
    else if(body.className=="black-theme")
    {
        body.classList.remove("black-theme");
        body.classList.add('white-theme');
    }
}
