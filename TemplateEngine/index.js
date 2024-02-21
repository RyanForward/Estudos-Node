const express  = require('express')
const exphbs = require('express-handlebars')
const app = express()
const mysql = require('mysql')

const hbs = exphbs.create({
    partialsDir: ['/views/partials'],
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res)=>{
    const items = ["Item a", "Item b", "Item c"]
    res.render("dashboard", {items})
})

app.get('/post', (req, res)=>{
    const post = {
        title: 'Aprender NodeJS',
        category: 'JS',
        body: 'Aprendendo JS',
        comments: 4
    }
    res.render('blogpost', {post})
})

app.get('/blog', (req, res)=>{
    const posts = [
        {
            title: 'Aprender NodeJS',
            category: 'Javascript',
            body: 'aprendendo.js',
            comments: 4
        },
        {
            title: 'Aprender Python',
            category: 'Python',
            body: 'aprendendo.py',
            comments: 1
        },
        {
            title: 'Aprender html',
            category: 'HTML',
            body: 'aprendendo.html',
            comments: 8
        }
    ]
    res.render('blog', {posts})
})

app.get('/', (req, res)=>{
    const user ={
        name: "Ryan",
        surname:"Silva"
    }
    const palavra = {
        teste: "Teste"
    }
    const auth = true
    const aprooved = true

    res.render('home', {user: user, palavra: palavra, auth, aprooved})
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql',
})

conn.connect(function(err){
    if(err){
        console.log(err)
    }
    console.log('Conectou ao MySQL')
    app.listen(3000)
})

