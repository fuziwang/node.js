const db = require('./database.js');

var TodoList = function(){};

TodoList.prototype.getAll = function(cb){
  const sql = 'select * from todo';
  var item = [];
  db.query(sql,(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    result.forEach((e)=>{item.push(e.item);});
    cb(false,item);
  });
};

TodoList.prototype.addItem = function(item,cb){
  const sql = 'insert into todo(item) value(?)';
  db.query(sql,[item],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  }); 
};

module.exports = TodoList;
