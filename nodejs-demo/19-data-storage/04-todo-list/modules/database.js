var mysql = require('mysql');

var cfg = require('./config.json');

var pool = mysql.createPool(cfg);

module.exports = pool;
