const mongoose = require('mongoose');

const LivroSchema = new mongoose.Schema({
    titulo: {type: String, required: true},
    autor: {type: String, required: true},
    ano: {type: String, required: true},
    genero: {type: String, required: true},
    editora: {type: String, required: true},
    paginas: {type: String, required: true},
})

const Livro = mongoose.model("Livro", LivroSchema);

module.exports = Livro