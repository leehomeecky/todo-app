var mongoose = require('mongoose');

// creating a schema - this is like a blueprint;
var todoSchema = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo