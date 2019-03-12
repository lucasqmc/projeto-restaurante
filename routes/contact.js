var express = require('express');
var router = express.Router();

/* GET menu page. */
router.get('/', function(req, res, next) {
  res.render('contact',{
    title: 'Restaurante Maduro - Contato',
    headertext: 'Fale conosco!'
  });
});

module.exports = router;
