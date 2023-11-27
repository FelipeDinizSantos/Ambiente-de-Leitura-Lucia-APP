const axios = require('axios');

async function getBooks(query)
{
    try 
    {
        const response = await axios.get('http://localhost:3010/books/findBook', {
            params: {
                search: query
            }
        });

        if (response.data) 
        {
            return response.data;
        } 
        else 
        {
            return "Não encontrado!";
        }
    } 
    catch (error) 
    {
        console.error('Erro na requisição:', error.message);
        throw error;
    }
}

module.exports = getBooks;