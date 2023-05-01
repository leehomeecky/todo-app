var bodyParser = require('body-parser');
var todoController = require('../controllers/todoController');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = (app)=>{
    app.get('/todo', todoController.getalltodo);
    app.post('/todo', urlencodedParser, todoController.addtodo);
    app.delete('/todo/:item', todoController.deletetodo);
};