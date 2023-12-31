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
    document.querySelectorAll('.showInformationBook ul li p').forEach(p=>
        {
            p.innerText = '';
        })
    container.classList.remove('show')
})

btnOpen.forEach(btn=>
{
    btn.addEventListener('click', ()=>
    {
        container.classList.add('show');
        const id = event.target.parentNode.getAttribute('aria-label');
        fetch('https://api-ambiente-de-leitura-lucia.onrender.com/books/findBook?search=' + id)
            .then(response => response.json())
            .then(result => 
                {
                    const {title, author, category, publisher, ageRange, publicationDate, isRented} = result.books[0];
                    document.querySelector('li.title p').innerText=title;
                    document.querySelector('li.author p').innerText = author;
                    document.querySelector('li.category p').innerText = category;
                    document.querySelector('li.publisher p ').innerText = publisher;
                    document.querySelector('li.ageRange p').innerText = ageRange;

                    const date = new Date(publicationDate);
                    const day = date.getDate().toString().padStart(2, '0');
                    const month = (date.getMonth() + 1).toString().padStart(2, '0');
                    const year = date.getFullYear();
                    const formattedDate = `${day}/${month}/${year}`;
                    
                    console.log(isRented);

                    document.querySelector('li.publicationDate p').innerText = formattedDate;
                    switch(isRented)
                    {
                        case true:
                            document.querySelector('li.isRented p').innerText = 'Indisponivel';
                            break;
                        case false:
                            document.querySelector('li.isRented p').innerText = 'Disponivel';
                            break;
                        default:
                            document.querySelector('li.isRented p').innerText = 'Disponivel';
                    }
                })
            .catch(error => console.log('Erro:', error));
    })
})