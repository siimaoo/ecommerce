const mongoose = require('mongoose');
const Produtos = require('../models/produto');

module.exports = {
    buscar(req, res) {
        Produtos.find({}, (err, data) => {
            if (err) return res.status(400).send({ mensagem: "Erro ao realizar consulta!" });
            return res.status(200).send(data);
        });
    },
    buscarId(req, res) {
        const id = req.params.id;
        Produtos.findById({ _id: id }, (err, data) => {
            if (err) return res.status(400).send({ mensagem: "Erro ao realizar consulta!" });
            return res.status(200).send(data);
        });
    },
    adicionarProduto(req, res) {
        const { nome, categoria, descricao, imagem1, imagem2, imagem3, thumbnail, valor, oferta, valorOferta, acessos, estoque } = req.body;
        if (!nome || !categoria || !descricao || !imagem1 || !thumbnail || !valor || !estoque) return res.status(400).send({ mensagem: "Preencha todos os campos!" });
        Produtos.create(req.body, (err, data) => {
            if (err) return res.status(400).send({ mensagem: "Erro ao criar novo produto!" });
            return res.status(200).send(data);
        });
    },
    alterarProduto(req, res) {
        const id = req.params.id;
        Produtos.findByIdAndUpdate(id, { $set: req.body }, (err, data) => {
            if (err) return res.status(400).send({ mensagem: "Erro ao realizar atualização!" });
            return res.status(200).send(data);
        });
    },
    deletarProduto(req, res) {
        const id = req.params.id;

        Produtos.deleteMany({ _id: id }, (err, data) => {
            if (err) return res.status(400).send({ mensagem: "Erro ao remover produto!" });
            return res.status(200).send(data);
        });

    },
  
}