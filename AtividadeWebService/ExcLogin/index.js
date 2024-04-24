const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const usuarios = [
    { id: 1, nome: 'UsuarioTeste', email: 'usuario@teste.com', senha: 'senha123' }
];

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});


app.post('/login', (req, res) => {
    const { email, senha } = req.body;
    const usuario = usuarios.find(u => u.email === email && u.senha === senha);
    if (!usuario) {
        return res.status(401).send('Credenciais inválidas');
    }

    res.redirect('/cadastro.html');
});


app.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cadastro.html'));
});


app.post('/cadastro', (req, res) => {
    const { nome, email, senha } = req.body;

    if (usuarios.some(u => u.email === email)) {
        return res.status(400).send('Email já cadastrado');
    }

    const novoUsuario = { id: usuarios.length + 1, nome, email, senha };
    usuarios.push(novoUsuario);
    res.send('Cadastro realizado com sucesso!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
