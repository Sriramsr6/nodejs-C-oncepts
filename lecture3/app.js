const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const todos = [];

// Set the template engine
app.set('view engine', 'ejs');
// Set the location of templates
app.set('views', path.join(__dirname, 'views'));
// app.set('views', __dirname + '/views'); // Paths are created differently in different OS 

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

// Route -- 
// GET, POST, PUT, PATCH, DELETE

app.get('/', function (req, res) {
    res.render('homepage.ejs', { todos });
});

app.post('/', function(req, res) {
    // console.log(req.body);
    todos.push(req.body.todo);
    res.redirect('/');
    // res.render('homepage.ejs', { todos });
})

app.delete('/delete/:index', function(req, res) {
    console.log(req.params.index);
    todos.splice(req.params.index, 1);
    // Alter the array, remove the index element from array
    res.redirect('/');
})

app.listen(3000)