const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.buscar);
router.post('/create', userController.criar);
router.post('/auth', userController.auth);

module.exports = router;