const fs = require('fs');
const express = require('express');
const multer = require('multer');

var app = express();

var uploadSingle = multer({
      dest: 'upload-single/'
});

app.post('/upload-single',uploadSingle.single('logo'), (req, res, next) => {
      console.log(req.body);
      var file = req.file;
      var fileInfo = {};
      // 获取文件信息
      fileInfo.mimetype = file.mimetype;
      fileInfo.originalname = file.originalname;
      fileInfo.size = file.size;
      fileInfo.path = file.path;
      res.set({
        'content-type': 'application/json; charset=utf-8'
      });
      res.send(JSON.stringify(fileInfo));                                   
});
app.get('/', (req, res, next) => {
    var form = fs.readFileSync('./index.html', {encoding: 'utf8'});
    res.send(form);                                                         
});
app.listen(8080);
