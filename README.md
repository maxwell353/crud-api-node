# crud-api-node<br>
Desenvolvimento de um crud simples em nodejs.<br>

Banco de dados:<br>
CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; #executar antes de criar a primeira tabela do banco.<br>

recursos utilizados node:<br>
npx eslint --init<br>
npm i --save-dev husky nodemon<br>
npm i cors dotenv express express-promise-router pg<br>
npm i eslint-friendly-formatter<br>

No arquivo .env deve conter a conexão com o banco da seguinte maneira:<br>
DATABASE_URL=postgres://username:password@host:port/database
