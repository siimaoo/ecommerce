const mongoose = require('mongoose');
const Produtos = require('../models/produto');

module.exports = {
    async buscar(req, res) {
        try {
            const data = await Produtos.find({
                active: true
            }, 'nome preco slug');
            return res.status(200).send(data);
        } catch (e) {
            return res.status(500).send({ mensagem: "Falha ao processar sua requisição" })
        }
    },
    async buscarPorSlug(req, res) {
        try {
            const data = await Produtos.findOne({
                slug: req.params.slug,
                active: true
            }, 'nome descricao preco slug');
            return res.status(200).send(data);
        } catch (e) {
            return res.status(500).send({ mensagem: "Falha ao processar sua requisição" })
        }
    },
    async adicionarProduto(req, res) {
        try {
            let produto = new Produtos(req.body);
            await produto.save();
            return res.status(200).send({ mensagem: "Produto cadastrado!" });
        } catch (e) {
            return res.status(500).send({ mensagem: "Falha ao processar sua requisição" })
        }
    },
    async editarProduto(req, res) {
        try {
            await Produtos.findOneAndUpdate(req.params.slug, {
                $set: {
                    nome: req.body.nome,
                    descricao: req.body.descricao,
                    preco: req.body.preco,
                    ativo: req.body.ativo
                }
            });
            return res.status(200).send({ mensagem: "Produto alterado!" });
        } catch (e) {
            return res.status(500).send({ mensagem: "Falha ao processar sua requisição!" });
        }
    },
    async deletarProduto(req, res) {
        try {
            await Produtos.findOneAndRemove(req.params.slug);
            return res.status(200).send({mensagem: "Produto removido!"})
        }catch (e) {
            return res.status(500).send({ mensagem: "Falha ao processar sua requisição! " + e });
        }
    }

}