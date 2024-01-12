const express = require('express');
const router = express.Router();

function logReq(req, res, next){
    console.log("Executando a função Middleware para a rota usuários")
    return next();
}

router.get('/', logReq, (req, res) => {
    res.send('Acessando usuários');
})

router.get('/:id', (req, res) => {
    res.send('Acessando usuários com o id: ' + req.params.id);
})

router.post('/', (req, res) => {
    const corpo = `Login: ${req.body.login}\nSenha: ${req.body.senha}`
    res.send('Acessando usuários via post: \n' + corpo);
})

module.exports = router;