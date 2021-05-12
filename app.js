// Imports
const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const port = 5000

//Static Files + allow page navigation within /views
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

// Set Views
app.set('views', './views');
app.set('view engine', 'ejs');

//Render index.ejs first
app.get('', (req, res) => {
    res.render('index' )
})

app.get('/index', (req, res) => {
    res.render('index' )
})

app.get('/postTemplate', (req, res) => {
    res.render('postTemplate' )
})

// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`))