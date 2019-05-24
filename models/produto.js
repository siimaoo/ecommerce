const mongoose = require('mongoose');
const Schema = mongoose.Schema;

ProdutoSchema = new Schema({
<<<<<<< HEAD
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
=======
    nome: {type: String, required: true},
    descricao: {type: String, required: true},
    categoria: {type: String, required: true},
    estoque: {type: Number, required: true},
    valor: {type: Number, required: true},
    acessos: {type: Number, required: false, default: 0},
    imagem1: {type: String, required: true},
    imagem2: {type: String, required: false},
    imagem3: {type: String, required: false},
    thumbnail: {type: String, required: true},
    oferta: {type: Boolean, required: false, default: false},
    valorOferta: {type: Number, required: false, default: 0}
>>>>>>> origin/master
});

module.exports = mongoose.model('produto', ProdutoSchema);