#!/usr/bin/node

const mysql = require('mysql');

const con = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'ddd',
  database:'test'
});

con.connect();

// operation db

const sql = 'select * from books where book_id = ?';

// 增 const sql = 'insert into books value(?,?,?)';

// 改 const sql = 'update books set title = ? where book_id = ?';

//const sql = 'delete from books where book_id = ?';
con.query(sql,[1],function(err,result){
  if(err){
    console.error(err);
    process.exit(1000);
  }
  console.log(result[0].book_id);
});

con.end();
