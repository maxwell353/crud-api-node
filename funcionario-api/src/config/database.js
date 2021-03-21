/**
* arquivo: config/database.js
* descrição: arquivo responsavel pelas 'connectionStrings' (PostgreSQL)
* data: 21/03/2021
* author: Maxwell Alves Teixeira
*/

const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// ==> Conexão com a Base de Dados:
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

pool.on('error', (error, client) => {
    console.log('Unexpeted error on idle client', error)
    process.exit(-1)
});

pool.on('connect', () => {
    console.log('Base de dados conectado com sucesso!')
});

module.exports = {
    query: (text, prams) => pool.query(text, prams)
};