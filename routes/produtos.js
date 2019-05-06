const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');

router.get('/', produtosController.buscar);
router.get('/:id', produtosController.buscarId);
router.post('/criar', produtosController.adicionarProduto);
router.put('/alterar/:id', produtosController.alterarProduto);
router.delete('/remover/:id', produtosController.deletarProduto);

module.exports = router;