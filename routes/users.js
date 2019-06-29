const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');


router.get('/', userController.buscar);
router.get('/id/:id', userController.buscarId);
router.post('/create', userController.criar);
router.post('/auth', userController.auth);
router.get('/validar-token', auth, userController.validacao);

module.exports = router;