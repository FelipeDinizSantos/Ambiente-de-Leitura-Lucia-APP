const submit = document.getElementById('submitBtn');
const input = document.getElementById('inputSearch');

submit.addEventListener('click', ()=>
{
    window.location.assign('/buscar?search=' + input.value);
})

window.addEventListener('keypress', (event)=>
{
    if(input.value != '' && event.keyCode === 13)
    {
        window.location.assign('/buscar?search=' + input.value);
    }
})