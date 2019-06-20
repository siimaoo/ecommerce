const mongoose = require('mongoose');
const Schema = mongoose.Schema;

ProdutoSchema = new Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: [true, 'O slug é obrigatório'],
        trim: true,
        index: true,
        unique: true
    },
    descricao: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true
    },
    ativo: {
        type: Boolean,
        required: true,
        default: true
    },
    tags: [{
        type: String,
        required: true
    }],
    imagem: [{
        type: String,
        required: true,
        trim: true
    }]
});

module.exports = mongoose.model('produto', ProdutoSchema);