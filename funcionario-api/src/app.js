/**
* arquivo: app.js
* descrição: arquivo responsavel por fazer a conexão com o arquivo 'server.js'
* data: 21/03/2021
* author: Maxwell Alves Teixeira
*/

const express = require('express');
const cors = require('cors');

const app = express();

// ==> Rotas da API (Funcionario):
const index = require('./routes/index');

// const FuncionarioRoute = require('./routes/funcionario-routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
// app.use('/api/', FuncionarioRoute);

module.exports = app;
