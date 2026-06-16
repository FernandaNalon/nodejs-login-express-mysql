// Aqui criaremos a conexão com o banco de dados

// Importa o mysql2
const mysql = require('mysql2/promise');

// Carrega as variáveis do .env
require("dotenv").config();

// Criando a conexão com o banco
const conexao = mysql.createPool({
    // Estamos pegando os dados do arquivo .env
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Exporta a conexao
module.exports = conexao;