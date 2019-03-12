var express = require('express');
var router = express.Router();

/* GET menu page. */
router.get('/', function(req, res, next) {
  res.render('reservation',{title: 'Restaurante Maduro'});
});

module.exports = router;
