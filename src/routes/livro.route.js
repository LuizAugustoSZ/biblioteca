const route = require('express').Router();

const livroController = require('../controller/livro.controller');

route.post('/cadastrar',livroController.save)
route.get('/livros',livroController.findAll)
route.get('/livros/:id',livroController.findById)

module.exports = route;

