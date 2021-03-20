CREATE TABLE funcionario (
	idfuncionario uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
	nome VARCHAR[255] NOT NULL,
	cargo VARCHAR[255] NOT NULL,
	salario NUMERIC(5,2),
	datanascimento DATE NOT NULL,
	codfuncionario INTEGER NOT NULL
)