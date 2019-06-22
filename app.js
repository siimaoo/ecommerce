const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const produtoRoute = require('./routes/produtos');
const userRoute = require('./routes/users');
const viewsRoute = require('./routes/views');

const url = 'mongodb+srv://simao:simaosimaosimao@cluster0-za2ow.mongodb.net/test?retryWrites=true&w=majority';
const option = { reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true };
const porta = process.env.PORT || 3000; 

mongoose.connect(url, option);
mongoose.set('useCreateIndex', true);

mongoose.connection.on('error', (err) => {
    console.log("Erro na conexao com o banco de dados! " + err);
});
mongoose.connection.on('disconnected', (err) => {
    console.log("Desconectado do banco de dados! " + err);
});
mongoose.connection.on('connected', () => {
    console.log('Conectado ao banco de dados!');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.set({
        'Access-Control-Allow-Origin': 'http://177.177.41.108:5500',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type'
    })
    next();
})

app.use(express.static(__dirname + '/views'));
app.use('/', viewsRoute);
app.use('/api/produtos', produtoRoute);
app.use('/api/usuarios', userRoute);

app.listen(porta, () => {
    console.log('Servidor rodando na porta 3000')
});

module.exports = app;
