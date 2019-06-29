const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const Users = require('../models/user');
const jwt = require('jsonwebtoken');

const createUserToken = (userId) => {
    return jwt.sign({id: userId}, 'chavesecreta', {expiresIn: '7d'});
}

module.exports = {
    

    buscar(req, res) {
        Users.find({}, (err, data) => {
            if (err) return res.send({ error: 'Erro na consulta de usuarios!' });
            return res.send(data);
        });
    },
    buscarId(req, res) {
        Users.findOne({
            _id: req.params.id
        }, (err, data) => {
            if (err) return res.send({ error: 'Erro na consulta de usuarios!' + err});
            return res.send(data);
        });
    },
    criar(req, res) {
        const { email, senha, nome, sobrenome, cpf, endereco } = req.body;
        if (!email || !senha || !nome || !sobrenome || !cpf || !endereco ) return res.send({ error: "Dados não preenchidos!"});
        Users.findOne({ email: email }, (err, data) => {
            if (err) return res.send({ error: "Erro ao buscar usuario!" });
            if (data) return res.send({ error: "Usuario já registrado!" });

            Users.create(req.body, (err, data) => {
                if (err) return res.send({ error: "Erro ao criar usuario!" + err });
                data.senha = undefined;
                return res.send({data, token: createUserToken(data.id)});
            });
        });
    },
    auth(req, res) {
        const { email, senha } = req.body;
        if (!email || !senha) return res.send({ error: "Preencha todos os campos!" });
        Users.findOne({ email: email }, (err, data) => {
            if (err) return res.send({ error: "Erro ao buscar usuario!" });
            if (!data) return res.send({ error: "Usuario não registrado!" });
            bcrypt.compare(senha, data.senha, (err, same) => {
                if (!same) return res.send({ error: "Senha incorreta!" });
                data.senha = undefined;
                return res.send({data, token: createUserToken(data.id)});
            })
        }).select('+senha');
    },
    validacao(req, res) {
        return res.send({status: "Valido"});
    }
}
