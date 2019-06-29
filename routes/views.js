const express = require('express');
const router = express.Router();
const path = require('path');

router.use(express.static(__dirname + '/views'));

router.get('/', (req, res) => {
    res.render(path.join(__dirname, '../views', 'index.html'));
});
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'login.html'));
});
router.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'cadastro.html'));
});

module.exports = router;