const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.get('/', produtoController.buscar);
router.get('/:slug', produtoController.buscarPorSlug);
router.post('/', produtoController.adicionarProduto);
router.put('/:slug', produtoController.editarProduto);
router.delete('/:slug', produtoController.deletarProduto);

module.exports = router;