var express = require('express');

var todoController = require('./routs/todo');

var app = express();

// Setting up template engine;
app.set('view engine', 'ejs');

// static files;
app.use( express.static('./public'));

// fire controlers
todoController(app)

// |listen to port
app.listen(3000);
console.log('listening on port 3000');
