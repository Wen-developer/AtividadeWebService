const express = require('express');
const tarefas = require('./tarefas.json');
const path = require('path');
const app = express();
const PORT = 8080;
app.use(express.static(path.join(__dirname, 'public')));
app.get('/tarefas', (req, res) => {
    res.json(tarefas);
});
app.listen(PORT, () => {
    console.log(`Servidor em execução em http://localhost:${PORT}`);
});