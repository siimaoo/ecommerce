const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const produtoRoute = require('./routes/produtos');

const url = 'url';
const option = {reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true};

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

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', produtoRoute);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000!');
})

module.exports = app;