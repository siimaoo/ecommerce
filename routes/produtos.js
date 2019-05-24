const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const produtoController = require('../controllers/produtoController');

router.get('/', produtoController.buscar);
router.get('/:slug', produtoController.buscarPorSlug);
router.post('/', produtoController.adicionarProduto);
router.put('/:slug', produtoController.editarProduto);
router.delete('/:slug', produtoController.deletarProduto);
=======
const produtosController = require('../controllers/produtosController');

router.get('/', produtosController.buscar);
router.get('/:id', produtosController.buscarId);
router.post('/criar', produtosController.adicionarProduto);
router.put('/alterar/:id', produtosController.alterarProduto);
router.delete('/remover/:id', produtosController.deletarProduto);
>>>>>>> origin/master

module.exports = router;