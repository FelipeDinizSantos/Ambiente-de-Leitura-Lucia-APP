const express = require('express');
const router = express.Router();

const getBooks = require('../model/getBooks');

router.get('/', async(req, res)=>
{
    try 
    {
        const query = req.query.search;

        if(query)
        {
            const result = await getBooks(query); 
            if(result.books === false)
            {
                res.render('pages/notFound', {search: query})
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
        res.status(404).json({erro: error.message});
    }
})

module.exports = router;