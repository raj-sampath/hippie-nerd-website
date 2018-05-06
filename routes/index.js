var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('main');
});

/* GET Babies page. */
router.get('/babies', function(req, res, next) {
  res.render('babies');
});

module.exports = router;
