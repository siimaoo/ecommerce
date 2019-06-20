const mongoose = require('mongoose');
const Produtos = require('../models/produto');


module.exports = {
    buscar(req, res) {
        Produtos.find({
            active: true
        }, 'nome preco slug', (err, data) => {
            if (err) return res.status(500).send({ mensagem: "Falha ao processar sua requisição" });
            return res.status(200).send(data);
        })
    },
    buscarPorSlug(req, res) {

        Produtos.findOne({
            slug: req.params.slug,
            active: true
        }, 'nome descricao preco slug', (err, data) => {
            if (err)  return res.status(500).send({ mensagem: "Falha ao processar sua requisição" })
            return res.status(200).send(data);
        })

    },
    adicionarProduto(req, res) {

        Produtos.create(req.body, (err, data) => {
            if (err) return res.status(500).send({ mensagem: "Falha ao processar sua requisição" });
            return res.status(200).send({ mensagem: "Produto cadastrado!" });
        });
    },
    editarProduto(req, res) {

        Produtos.findOneAndUpdate(req.params.slug, {
            $set: {
                nome: req.body.nome,
                descricao: req.body.descricao,
                preco: req.body.preco,
                ativo: req.body.ativo
            }
        }, (err, data) => {
            if (err) return res.status(500).send({ mensagem: "Falha ao processar sua requisição!" });
            return res.status(200).send({ mensagem: "Produto alterado!" });
        })
    },
    deletarProduto(req, res) {

        Produtos.findOneAndRemove(req.params.slug, (err, data) => {
            if (err) return res.status(500).send({ mensagem: "Falha ao processar sua requisição! " + err });
            return res.status(200).send({ mensagem: "Produto removido!" })
        });
    }
}