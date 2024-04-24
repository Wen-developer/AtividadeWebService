// Exercícios
// 1- Elabore uma API que retorne uma mensagem do dia com base em uma data atualizada.
// 2- Crie uma API que necessite de um determinado login e senha para ser acessada. A mesma deve retornar uma página de cadastro de clientes de um e-commerce.
// 3- Crie uma API para gerenciar uma lista de tarefas (to-do list), onde as tarefas serão armazenadas em memória durante a execução do servidor.
// Utilize um array em memória para armazenar as tarefas. Cada tarefa pode ter um formato simples, como { id, title}.
// Retorne respostas HTTP apropriadas com os dados ou mensagens apropriadas.
// 4- Criar uma API para consultar informações sobre livros, onde os dados dos livros serão armazenados em memória durante a execução do servidor.

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const messages = [
    { id: 1, mensagem: "Hoje tem 6 gols do Yuri Alberto." },
    { id: 2, mensagem: "Hoje o Corinthians ganha." },
    { id: 3, mensagem: "Hoje é o dia do Cássio Ramos agarrar 13 pênaltis." },
    { id: 4, mensagem: "Hoje o Meiras perde." }
];

app.get('/mensagem/:dia', (req, res) => {
    const { dia } = req.params;
    const message = messages.find(msg => msg.id === parseInt(dia));
    if (message) {
        res.json({ mensagem: message.mensagem });
    } else {
        res.status(404).json({ mensagem: "Mensagem não encontrada para o dia especificado." });
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));

});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

