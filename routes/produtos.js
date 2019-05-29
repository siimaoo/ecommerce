const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');
const auth = require('../middlewares/auth');

router.get('/', produtoController.buscar);
router.get('/:slug', produtoController.buscarPorSlug);
router.post('/', auth ,produtoController.adicionarProduto);
router.put('/:slug', auth ,produtoController.editarProduto);
router.delete('/:slug', auth ,produtoController.deletarProduto);

module.exports = router;