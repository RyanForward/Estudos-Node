const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();
const port = 3000;
const path = require('path');
const {spawn} = require('child_process');
const fs = require('fs');

app.use(bodyParser.urlencoded({extended:true}));


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const caminho = './uploads'
        if(fs.existsSync(caminho) == false){
            console.log(`Pasta ${caminho} não existe! Criando...`)
            fs.mkdirSync(caminho);
        }        
        cb(null, 'uploads/')
    },
    filename: (req, file, cb)=>{
        cb(null, file.fieldname+'-'+Date.now()+path.extname(file.originalname))
    }
})

const upload = multer({storage});

app.get('/', (req, res)=>{
    // res.sendStatus(200);
    // res.json({message: 'Bem-vindo'});
    res.sendFile(__dirname+'/index.html');
})

app.post('/upload', upload.single('arquivo'), (req, res, next)=>{
    const file = req.file;
    if(!file){
        const err = new Error("Por favor selecione um arquivo!");
        err.httpStatusCode = 400;
        return next(err);
    }
    // res.end('Upload realizado com sucesso')
    res.send(file);
})

app.listen(3000, '127.0.0.1', ()=>{
    console.log(`Server running on http://localhost${port}`);
})