const Livro = require('../models/Livros');

const saveService = (body) => Livro.create(body);

const findAllService = () => Livro.find()

const findByIdService = (id) => Livro.findById(id)

module.exports = { saveService, findAllService, findByIdService}