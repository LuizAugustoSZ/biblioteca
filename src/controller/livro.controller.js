const livroService = require('../services/livro.service')
const mongoose = require('mongoose')

const save = async (req,res)=>{
    const{titulo,autor,ano,genero,editora,paginas} = req.body;

    const livro = await livroService.saveService(req.body)

    if(!livro){
        res.status(400).send({message:"Erro ao cadastrar livro"})
    }

    res.status(201).send({
        message: "Livro cadastrado com sucesso",
        livro:{
            id: livro._id, titulo, autor, ano, genero, editora, paginas
        }
    })
}

const findAll = async (req,res)=>{
    const livros = await livroService.findAllService()

    if(livros.length === 0){
        return res.status(400).send({message: "Não há livros cadastrados"})
    }
    
    res.status(200).send(livros)

}

const findById = async (req,res)=>{
    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({message:"ID Invalido"})
    }

    const livro = await livroService.findByIdService(id)

    if(!livro){
        res.status(400).send({message:"livro não encontrado"})
    }

    res.status(200).send(livro)
}

module.exports = {save, findAll, findById}
