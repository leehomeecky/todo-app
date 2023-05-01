var mongoose = require('mongoose');
var Todo = require('../model/todos')

// connect to mongodb;
mongoose.connect('mongodb://root:password@localhost:27017/todo?authSource=admin', ()=>{
    console.log("conected to database successful")
});


// var data = [{item: 'get milk'}, {item: 'Walk dog'}, {item: 'kik some coding ass'}];
var getalltodo = (req, res)=>{ 
                            Todo.find({}, (err, data)=>{
                                if(err) throw err;
                                res.render('todo', {todos: data})
                            })
                            
                        };

                        
var addtodo = (req, res)=>{
                            var newTodo = Todo(req.body).save((err, data)=>{
                                if(err) throw err;
                                res.json(data)
                            });
                        };

var deletetodo = (req, res)=>{
                                Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove((err, data)=>{
                                    if(err) throw err;
                                    res.json(data);
                                });
                            }

    module.exports = {getalltodo, addtodo, deletetodo};