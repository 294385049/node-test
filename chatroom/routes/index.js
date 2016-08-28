var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/index.html');
});

//暂时没搞数据库，弄个坑爹的文本先记着吧


module.exports = router;
