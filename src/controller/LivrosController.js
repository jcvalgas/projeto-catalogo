
import { books } from "../model/livro.js"

export const getIndex = async (req, res) => {
    const livros = await books.findAll()
    try {
        res.render('index.ejs', {
            livros
        })
    }

    catch(err) {
        res.send(err)
    }
}

export const getDetalhes = async (req, res) => {
    try {
        const livro = await books.findByPk(req.params.id)
        res.status(200).render('details.ejs', {
            livro
        })
    } catch (err) {
        res.status(500).send({
            err: err.message
        })
    }
}

export const getDeletar = async (req, res) => {
    try {
        await books.destroy({
            where: {
            id: req.params.id
        }})
        res.status(200).redirect("/")
    }
    catch(err){
        res.status(500).send({err: err.message})
    }
}

export const getCriar = (req, res) => {
    res.status(200).render('create')
}

export const postCriar = async (req, res) => {
    try {
        const { nome, capa, ano_l, autor, sinopse } = req.body
        console.log(req.body)
        await books.create({
            nome, capa, ano_l, autor, sinopse
        })
        res.status(200).redirect('/')
    }
    catch(err){
        res.send(err.message)
    }
}

export const getEditar = async (req, res) => {
    const livros = await books.findByPk(req.params.id)
    res.status(200).render('edit.ejs', {
        livros
    })
}

export const postEditar = async (req, res) => {
    const { nome, capa, ano_l, autor, sinopse } = req.body
    try {
        await books.update({
            nome: nome, 
            capa: capa, 
            ano_l: ano_l, 
            autor: autor, 
            sinopse: sinopse, 
        }, {
            where: {
                id: req.params.id
            }
        })

        res.redirect('/')
    }

    catch(err) {
        res.status(500).send(err.message)
    }
}