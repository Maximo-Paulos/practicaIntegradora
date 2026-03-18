var express = require('express');
var router = express.Router();
var heroeController = require('../controllers/heroeController')

var heroeController = require('../controllers/heroeController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('heroes');
});

router.get('/detalle/id/:id', heroeController.detalle);

router.get('/bio/id/:id/ok?',);




module.exports = router;
