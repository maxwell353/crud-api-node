/**
* arquivo: routes/index.js
* descrição: arquivo responsavel pela chamada da API pela aplicação no lado do Back-End
* data: 21/03/2021
* author: Maxwell Alves Teixeira
*/

const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
	res.status(200).send({
		success: 'true',
		menssage: 'Seja bem-vindo(a) a API Node.js + PostegreSQL + Vue.js',
		version: '1.0.0'
	});
});

module.exports = router;