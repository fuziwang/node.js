var express = require('express');
var router = express.Router();

var item = [];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { item: item});
});


router.post('/',function(req,res,next){
  if(req.body.item !== '') item.push(req.body.item);
  res.render('index',{item:item});
});
module.exports = router;
