const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true, lowercase: true },
    senha: {type: String, required: true, select: false},
    nome: {type: String, required: true, select: true},
    sobrenome: {type: String, required: true, select: true},
    cpf: {type: String, required: true, select: true, unique: true,},
    endereco: {
        logradouro: {type: String, required: true, select: true, default: undefined},
        bairro: {type: String, required: true, select: true, default: undefined},
        cidade: {type: String, required: true, select: true, default: undefined},
        cep: {type: String, required: true, select: true, default: undefined},
        estado: {type: String, required: true, select: true, default: undefined},
    },
    created: {type: Date, default: Date.now}
});

UserSchema.pre('save', function (next) {
    let user = this;
    if(!user.isModified('senha')) return next();
    bcrypt.hash(user.senha, 10, (err,encrypted) => {
        user.senha = encrypted;
        return next();
    });
});


module.exports = mongoose.model('User', UserSchema);
