const express = require('express');
const router = express.Router();

const getBooks = require('../model/getBooks');

router.get('/', async(req, res)=>
{
    try 
    {
        const query = req.query.search ? req.query.search.toString() : '';

        if (query.trim() !== '') 
        {
            const result = await getBooks(query); 
            if(result === false)
            {
                res.render('pages/notFound', {search: query, errorMessage: 'Nenhum livro encontrado!'})
            }
            res.render('pages/booksList', {data:result, search: query});
        }
        else
        {
            throw new Error('Falha ao realizar a busca!');
        }
    } 
    catch (error) 
    {
        res.status(500).json({erro: error.message});
    }
})

module.exports = router;