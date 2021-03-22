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
    try {
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
    } catch (error) {
        console.error('createFuncionario', error);
        res.status(500).send({
        message: "Ocorreu um erro."
    });
  }
};

// ==> Metodo responsavel por listar todos os 'Funcionarios':
exports.listAllFuncionarios = async(req, res) => {
    try {
        const response = await db.query('SELECT * FROM funcionario ORDER BY nome ASC');
        res.status(200).send(response.rows);
    } catch (error) {
        console.error('listAllFuncionarios', error);
        res.status(500).send({
        message: "Ocorreu um erro."
    });
  }
};

// ==> Metodo responsavel por listar um determinado 'Funcionario' por Id:
exports.findFuncionarioById = async(req, res) => {
    const { id } = req.params;
    try {
        const { rows } = await db.query('SELECT * FROM funcionario WHERE id_funcionario = $1', [id]);
        if (!rows.length) {
            throw 'funcionario_nao_encontrado';
        }
        res.status(200).send(rows[0]);
    } catch (error) {
      console.error('findFuncionarioById', error);
      if (error == 'funcionario_nao_encontrado') {
        res.status(404).send({
            message: "Funcionario nao encontrado."
        });
      } else {
        res.status(500).send({
            message: "Ocorreu um erro."
        });
      }
    }
};

// ==> Metodo responsavel por atualizar um determinado 'Funcionario' por Id:
exports.updateFuncionarioById = async(req, res) => {
    const { id } = req.params;
    try {
        const { nome, cargo, salario, data_nascimento, codigo_funcionario } = req.body;
        const response = await db.query(
            'UPDATE funcionario SET nome = $1, cargo = $2, salario = $3, data_nascimento = $4, codigo_funcionario = $5 WHERE id_funcionario = $6',
            [nome, cargo, salario, data_nascimento, codigo_funcionario, id]
        );

        res.status(200).send({message: 'Atualização de funcionario realizada com sucesso!'});
    } catch (error) {
        console.error('updateFuncionarioById', error);
        res.status(500).send({
            message: "Ocorreu um erro."
        });
    }
};

// ==>  Metodo responsavel por deletar/excluir um determinado 'Funcionario' por Id:
exports.deleteFuncionarioById = async(req, res) => {
    const { id } = req.params;
    try {
        await db.query('DELETE FROM funcionario WHERE id_funcionario = $1', [id]);
        res.status(200).send({message: 'Funcionario deletado com sucesso!'});
    } catch (error) {
        console.error('deleteFuncionarioById', error);
        res.status(500).send({
          message: "Ocorreu um erro."
        });
    }
};