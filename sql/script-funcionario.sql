CREATE TABLE funcionario (
	id_funcionario uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
	nome VARCHAR(255) NOT NULL,
	cargo VARCHAR(255) NOT NULL,
	salario NUMERIC(7,2) NOT NULL,
	data_nascimento DATE NOT NULL,
	codigo_funcionario INTEGER NOT NULL
)