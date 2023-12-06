const btnOpen = document.querySelectorAll('.open');
const btnClose = document.getElementById('close');
const container = document.querySelector('.showInformationBook');
const logo = document.querySelector('header img');

logo.addEventListener('click', ()=>
{
    window.location.assign('/');
})

btnClose.addEventListener('click', ()=>
{
    document.querySelectorAll('.showInformationBook ul li').forEach(li=>
        {
            li.innerHTML = '';
        })
    container.classList.remove('show')
})

btnOpen.forEach(btn=>
{
    btn.addEventListener('click', ()=>
    {
        container.classList.add('show');
        const id = event.target.parentNode.getAttribute('aria-label');
        fetch('http://localhost:3010/books/findBook?search=' + id)
            .then(response => response.json())
            .then(result => 
                {
                    const {title, author, category, publisher, ageRange, publicationDate, isRented} = result.books[0];
                    document.querySelector('li.title p').innerHTML=title;
                    document.querySelector('li.author p').innerHTML = author;
                    document.querySelector('li.category p').innerHTML = category;
                    document.querySelector('li.publisher p ').innerHTML = publisher;
                    document.querySelector('li.ageRange p').innerHTML = ageRange;

                    const date = new Date(publicationDate);
                    const day = date.getDate().toString().padStart(2, '0');
                    const month = (date.getMonth() + 1).toString().padStart(2, '0');
                    const year = date.getFullYear();
                    const formattedDate = `${day}/${month}/${year}`;
                    
                    document.querySelector('li.publicationDate p').innerHTML = formattedDate;
                    switch(isRented)
                    {
                        case true:
                            document.querySelector('li.isRented p').innerHTML = 'Disponivel';
                            break;
                        case false:
                            document.querySelector('li.isRented p').innerHTML = 'Indisponivel';
                            break;
                        default:
                            document.querySelector('li.isRented p').innerHTML = 'Disponivel';
                    }
                })
            .catch(error => console.log('Erro:', error));
    })
})