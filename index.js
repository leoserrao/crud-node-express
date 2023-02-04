const { request } = require('express');
const express = require ('express');

const server = express();

server.use(express.json());

const cursos = ['HTML5 Completo', 'CSS3 Básico', 'Javascrip Moderno'];

//Retornar todos os cursos
server.get('/cursos', (req, res) => {
    return res.json(cursos);
})

//Retornar um curso específico
server.get('/cursos/:index', (req, res) => {
    const { index } = req.params;

    return res.json(cursos[index]);
})

//Criar um novo curso
server.post('/cursos', (req, res) => {
    const { name } = req.body;

    cursos.push(name);

    return res.json(cursos);
})

//Atualizar (update) um curso
server.put('/cursos/:index', (req, res) => {
    const { index } = req.params;

    const { name } = req.body;

    cursos[index] = name;

    return res.json(cursos);
})

//Deletar um curso específico
server.delete('/cursos/:index', (req, res) => {
    const { index } = req.params;

    cursos.splice(index, 1);

    return res.json({ message: "Curso deletado com sucesso!" });
})

server.listen(3000);