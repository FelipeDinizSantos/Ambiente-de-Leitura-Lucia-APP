const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const indexRouter = require('./app/routes/index.js');
const searchRouter = require('./app/routes/booksList.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');

app.use('', indexRouter);
app.use('/buscar', searchRouter);

app.listen(process.env.PORT ? Number(process.env.PORT) : port, ()=>
{
    console.log('Servidor Iniciado na porta: ' + port);
})