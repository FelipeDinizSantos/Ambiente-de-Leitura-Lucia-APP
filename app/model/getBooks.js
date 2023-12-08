const axios = require('axios');

async function getBooks(query)
{
    try 
    {
        const response = await axios.get('https://api-ambiente-de-leitura-lucia.onrender.com/books/findBook', 
        {
            params: 
            {
                search: query
            }
        });

        if (response.data && response.data.books) 
        {
            return response.data.books;
        } 
        else 
        {
            return false;
        }
        
    } 
    catch (error) 
    {
        console.error('Erro na requisição:', error.message);
    }
}

module.exports = getBooks;