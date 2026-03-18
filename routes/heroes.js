var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('heroes');
});

router.get('/detalle/id/:id', function(req, res, next){
    res.send('detalle del heroe del id') + req.paramas.id
})


router.get('/bio/id/:id/ok?', function(req, res, next){
    res.send('bio del heroe') + req.params.id
})




module.exports = router;