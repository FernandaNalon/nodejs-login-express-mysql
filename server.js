const express = require('express'); // Importa o Express
const path = require('path'); // Importa o módulo Path
require("dotenv").config(); // Carrega as variáveis do arquivo .env
const {
    cadastrarUsuario,
    realizarLogin,
    exibirSucesso // Importa as funções do Controller
} = require("./controllers/authController"); 
const app = express(); // Cria a aplicação express
const conexao = require("./config/database"); // Importa a conexão do banco de dados

// Testa a conexão com o banco de dados
conexao.getConnection()
.then(() => {
    console.log("Banco de dados conectado com sucesso!");
})
.catch((erro) => {
    console.log("Erro ao conectar o banco de dados.", erro);
});

// Define a porta do servidor
const PORT = process.env.PORT || 3000;

// Middleware para ler dados enviados por formulários HTML
app.use(express.urlencoded({ extended: true }));

// Middleware para ler dados em JSON
app.use(express.json());

// Middleware para servir arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, "public")));

// Rota inicial: redireciona o usuário para a tela de login
app.get("/", (req, res) => {
    res.redirect("/login.html");
});

// Definição dos Endpoints
app.post("/cadastro", cadastrarUsuario);
app.post("/login", realizarLogin);
app.get("/sucesso", exibirSucesso);

// Inicialização do Servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});