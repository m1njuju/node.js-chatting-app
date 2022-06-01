var express = require('express');
var router = express.Router();
var path = require("path");
// Node.js 기본 내장 모듈 불러오기
const fs = require("fs");

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('유저가 /으로 접속하였습니다')
  // public에 있는 index.html로 접근
  //res.render('index', { title: 'Express' });
  fs.readFile(path.join(__dirname, '../public', "index.html"),
  function (err, data) {
    if(err) {
      res.send('에러')
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data)
      res.end() // 끝맺기
    }
  })
});

module.exports = router;
