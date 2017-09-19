var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HackerNews Clone Front-End!!!!!',groupName: "semester groupies" });
});

module.exports = router;
