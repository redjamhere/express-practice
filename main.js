const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))

var name = ''

app.get('/', (req,res) => {res.render('index', {name : name})})
app.get('/blog', (req,res) => {res.render('blog', {name : name})})
app.get('/read', (req,res) => {res.render('read', {name : name})})
app.get('/about', (req,res) => {res.render('about', {name : name})})

app.post('/', (req, res) => {
    name = req.body.name
    res.redirect('/')
})


app.listen(3000, () => console.log('App started'))

