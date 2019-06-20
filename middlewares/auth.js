const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token_header = req.body.auth || req.query.auth || req.headers['x-access-auth'];

    if(!token_header) return res.status(500).send({mensagem: "Autenticação recusada!"});

    jwt.verify(token_header, 'chavesecreta', (err, decoded) => {
        if (err) return res.status(500).send({mensagem: "Toke invalido!"});
        res.locals.auth_data = decoded;
        return next();
    })
}

module.exports = auth;