const express = require('express');  //importa o express, módulo de terceiros para manipular rotas, middleware e templates 
const app = express(); //instancia o express na variável app
const port = 3000 //define a porta de execução do servidor
const adminRoutes = require('./routes/admin'); //instancia as rotas de administrador
const userRoutes = require('./routes/user'); //instancia as rotas de usuário
const cookieParser = require('cookie-parser'); //importa o módulo cookie-parser, de terceiros para manipular cookies

app.use('/logo', express.static('public')) //para o express saber que a pasta public fornece arquivos estáticos

app.use(express.json());  //função de middleware para interferir na requisição e permitir o uso de JSON
app.use(cookieParser());  //função de middleware para interferir na requisição e permitir o uso e manip. de cookies

//Criando uma middleware function
app.use((req, res, next) => {   //.use para indicar a chamada de um middleware

    console.log("Executando middleware em nível de aplicação");

    return next(); //retorno da próxima função
})

app.get('/setcookie', (req, res) => {     // /setcookie para definir um cookie
    res.cookie('user', 'ryanSilva', {maxAge: 9000000, httpOnly: true});  //gera um cookie na resposta da requisição, onde o nome é user, o conteúdo é ryanSilva e a duração é 900000 ms
    return res.send("Cookie foi gravado com sucesso!"); //envia uma resposta dizendo que o cookie foi gravado
})

app.get('/getcookie', (req, res) => {  //  /getcookie para pegar um cookie
    let user = req.cookies['user'];   //procura armazena numa variável o nome do cookie que está em um array de cookies
    user ? res.send(user) : res.send("Cookie nao encontrado");  //se existir um cookie daquele jeito, retorna o conteúdo, senão diz que não encontrou
})

app.get('/', (req, res) => {     // / para pasta raiz
    res.send('Acessando pasta raiz');
})

app.use('/admin', adminRoutes);  //função de middleware para tratar rotas
app.use('/user', userRoutes);  //função de middleware para tratar rotas

app.get('*', (req, res, next)=>{    // * definido como um erro de rota. Ex: usuario inseriu rota errada
    setImmediate(()=>{
        next(new Error('Temos um problema'))
    })
})

app.use((err, req, res, next)=>{      // função middleware para tratamento de erro que é ativada quando algum erro ocorre
    console.log(err.stack);
    res.status(500).json({message: err.message});
})

app.listen(port, () => {      //coloca o servidor online
    console.log(`Server running... http://localhost:${port}`)
})