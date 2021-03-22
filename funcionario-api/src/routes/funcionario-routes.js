/**
* arquivo: routes/funcionario-routes.js
* descrição: arquivo responsavel pelas rotas da API
* data: 21/03/2021
* author: Maxwell Alves Teixeira
*/

const router = require("express-promise-router")();
const funcionarioController = require('../controllers/funcionario-controller');

// ==> Definindo as rotas do CRUD - 'Funcionario'

// ==> Rota responsavel por criar um novo 'Colaborador(a)' : (POST): localhost:3000/api/funcionarios
router.post('/funcionarios', funcionarioController.createFuncionario);

// ==> Rota responsavel por listar todos os 'Colaboradores': (GET): localhost:3000/api/funcionarios
router.get('/funcionarios', funcionarioController.listAllFuncionarios);

// ==> Rota responsavel por listar um deteterminado 'Colaborador' por Id: (GET): localhost:3000/api/funcionarios/id
router.get('/funcionarios/:id', funcionarioController.findFuncionarioById);

// ==> Rota responsavel por atualizar um determinado 'Colaborador(a)' por Id: (PUT): localhost:3000/api/funcionarios/id
router.put('/funcionarios/:id', funcionarioController.updateFuncionarioById);

// ==> Rota responsavel por deletar/excluir um determinado 'Colaborador(a)' por Id: (DELETE): localhost:3000/api/funcionarios/id
router.delete('/funcionarios/:id', funcionarioController.deleteFuncionarioById);

module.exports = router;