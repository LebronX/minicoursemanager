var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodeRarser = bodyParser.urlencoded({ extended: false });
app.post('/house',urlencodeRarser,function (req, res) {
  var data = req.body;
  var result = JSON.stringify({code:0, data:'http://www.baidu.com/&id=' + data.data});
  //console.log(result)
  res.end(result);
 
});