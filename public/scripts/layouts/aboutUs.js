const btn = document.querySelector('.clickable');
const content = document.querySelector('.content');

btn.addEventListener('click', ()=>
{
    content.classList.toggle('show');
})