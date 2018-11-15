const TodoList = require('../modules/todo-list.js');
var express = require('express');
var router = express.Router();

var todo = new  TodoList();

/* GET home page. */
router.get('/', function(req, res) {
  todo.getAll((err,item)=>{
    if(err){
      console.error(err);
      process.exit(1000);
    }
    res.render('index',{item:item});
  });
});


router.post('/',function(req,res){
  if(req.body.item !== ''){
    todo.addItem(req.body.item,(err)=>{
      if(err) console.error(err);
    });
  }
  todo.getAll((err,item)=>{
    if(err){
      console.error(err);
      process.exit(1000);
    }
    res.render('index',{item:item});
  });
});
module.exports = router;
