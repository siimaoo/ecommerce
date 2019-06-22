const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'index.html'));
});
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'login.html'));
});
router.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'cadastro.html'));
});

module.exports = router;