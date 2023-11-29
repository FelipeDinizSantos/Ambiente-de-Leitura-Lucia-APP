const submit = document.getElementById('submitBtn');
const input = document.getElementById('inputSearch');

function validateString(str) 
{
    var regex = /\s{2,}/;

    if (regex.test(str)) return false;

    return true;
}

  

submit.addEventListener('click', ()=>
{

    if(input.value != null && input.value != "" && validateString(input.value))
    { 
        window.location.assign('/buscar?search=' + input.value);
    }
    else alert('Preencha o campo de pesquisa!');
})

window.addEventListener('keypress', (event)=>
{
    if(input.value != '' && event.keyCode === 13)
    {
        window.location.assign('/buscar?search=' + input.value);
    }
})