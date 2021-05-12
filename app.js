// Imports
const express = require('express')
const app = express()
const port = 5000

//Static Files
app.use(express.static('public'));

// Set View's
app.set('views', './views');
app.set('view engine', 'ejs');

//Render index.ejs
app.get('', (req, res) => {
    res.render('index', { text: 'Hey' })
})

// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`))