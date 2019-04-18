var express = require('express');
var router = express.Router();
var zh = require("../i18n/cn.js");
var en = require("../i18n/cn.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/main", function (req, res, next) {
  if (!req.cookies.lang) {
    res.render('main',{"lang": en})
  }
  if (req.cookies.lang.indexOf("zh") > -1){
    res.render('main',{"lang": zh})
  } else {
    res.render('main',{"lang": en})
  }
});

module.exports = router;
