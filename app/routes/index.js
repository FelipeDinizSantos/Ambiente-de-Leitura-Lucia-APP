const express = require('express');
const router = express.Router();

router.get('/', async(req, res)=>
{
    res.render('pages/index', {title: 'Página Inicial'});
});

module.exports = router;