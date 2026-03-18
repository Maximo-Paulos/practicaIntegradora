var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/heroes', function(req, res, next) {
  res.render('heroes');
});

module.exports = router;