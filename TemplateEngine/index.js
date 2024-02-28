const express  = require('express')
const exphbs = require('express-handlebars')
const app = express()
const mysql = require('mysql')

const hbs = exphbs.create({
    partialsDir: ['/views/partials'],
})

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

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

// app.get('/', (req, res)=>{
//     const user ={
//         name: "Ryan",
//         surname:"Silva"
//     }
//     const palavra = {
//         teste: "Teste"
//     }
//     const auth = true
//     const aprooved = true

//     res.render('home', {user: user, palavra: palavra, auth, aprooved})
// })

app.get('/', (req, res)=>{
    res.render('home2')
})

app.post('/books/insertbook', (req, res)=>{
    const title = req.body.title
    const pageqty = req.body.pageqty

    const queryAddBook = `INSERT INTO books (title, pageqty) VALUES ('${title}', '${pageqty}')`
    conn.query(queryAddBook, function(err){
        if(err){
            console.log(err)
        }

        res.redirect('/')
    })
})

app.get('/books', (req, res)=>{
    const queryGetBooks = "SELECT * FROM books"
    conn.query(queryGetBooks, function(err, data){
        if(err){
            console.log(err)
            return
        }
        const books = data
        console.log(books)
        res.render('books', {books})
    })
})

app.get('/books/:id', (req, res)=>{
    const id = req.params.id
    const sql = `SELECT * FROM books WHERE id=${id}`

    conn.query(sql, function(err, data){
        if(err){
            console.log(err)
            return
        }

        const book = data[0]
        res.render('book', {book})
    })

})

app.get('/books/edit/:id', (req, res)=>{
    const id = req.params.id
    const sql = `SELECT * FROM books WHERE id=${id}` 

    conn.query(sql, function(err, data){
        if(err){
            console.log(err)
            return
        }

        const book = data[0]
        res.render('editbook', {book})
    })
})

app

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

