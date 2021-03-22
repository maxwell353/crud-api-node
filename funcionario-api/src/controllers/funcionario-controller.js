/**
* arquivo: controllers/funcionario-controller.js
* descrição: arquivo responsavel pela logica do CRUD (API - Funcionario)
* data: 21/03/2021
* author: Maxwell Alves Teixeira
*/

const db = require('../config/database');

// ==> Metodo responsavel por criar um novo 'Funcionario':
exports.createFuncionario =  async(req, res) =>{
    const { nome, cargo, salario, data_nascimento, codigo_funcionario } = req.body;
    const { rows } = await db.query(
        "INSERT INTO funcionario (nome, cargo, salario, data_nascimento, codigo_funcionario) VALUES ($1, $2, $3, $4, $5)",
        [nome, cargo, salario, data_nascimento, codigo_funcionario]
    );

    res.status(201).send({
        message: 'Funcionario adicionado com sucesso.',
        body: {
            funcionario: { nome, cargo, salario, data_nascimento, codigo_funcionario },
        },
    });
};

// ==> Metodo responsavel por listar todos os 'Funcionarios':
exports.listAllFuncionarios = async(req, res) => {
    const response = await db.query('SELECT * FROM funcionario ORDER BY nome ASC');
    res.status(200).send(response.rows);
};