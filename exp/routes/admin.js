const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Acessando administração');
})

router.get('/:id', (req, res) => {
    res.send('Acessando administração com o id: ' + req.params.id);
})

router.post('/', (req, res) => {
    const corpo = `Login: ${req.body.login}\nSenha: ${req.body.senha}`
    res.send('Acessando administração via post: \n' + corpo);
})

router.patch('/:id', (req, res)=>{
    res.send("Acessando a administração via path")
})

router.put('/:id', (req, res)=>{
    res.send("Acessando a administração via put")
})

router.delete('/:id', (req, res)=>{
    res.send("Acessando a administração via delete")
})

module.exports = router