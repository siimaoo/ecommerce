const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile( path.resolve('../views/index.html'));
});
router.get('/login', (req, res) => {
    res.sendFile( path.resolve('../views/login.html'));
});
router.get('/cadastro', (req, res) => {
    res.sendFile( path.resolve('../views/cadastro.html'));
});

module.exports = router;