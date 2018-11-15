const TodoList = require('../modules/todo-list.js');

var todo = new TodoList();

todo.addItem('游泳',(err,result)=>{
  //console.log(err,result);
});

todo.getAll(function(err,result){
  if(err){
    console.error(err);
    process.exit(1000);
  }
  console.log(result);
});
