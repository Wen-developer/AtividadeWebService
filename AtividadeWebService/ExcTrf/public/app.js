fetch('http://localhost:8080/tarefas')
    .then(response => response.json())
    .then(data => {
        const tarefasList = document.getElementById('tarefas-list');
        data.forEach(tarefa => {
            const tarefaDiv = document.createElement('div');
            tarefaDiv.innerHTML = `
                <h2>${tarefa.nome}</h2>
            `;
            tarefasList.appendChild(tarefaDiv);
        });
    })
    .catch(error => console.error('Erro ao carregar as tarefas:', error));