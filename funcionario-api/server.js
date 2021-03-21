/**
* arquivo: server.js
* descrição: arquivo responsavel por toda a configuração e execução do Back-End ('Funcionario')
* data: 21/03/2021
* author: Maxwell Alves Teixeira
*/

const app =  require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () =>{
	console.log('Aplicação sendo executada na porta...:', port);
});