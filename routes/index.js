var express = require('express');
var router = express.Router();

var pg = require('pg')
var connectionString = process.env.DATABASE_URL ||'postgres://aaron:newone@localhost:5432/todo'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
