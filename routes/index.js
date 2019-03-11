var express = require('express');
var router = express.Router();
var con = require('./../inc/db');

/* GET home page. */
router.get('/', function(req, res, next) {

  con.query(`SELECT * FROM tb_menus ORDER BY title`, (err,results) => {

    if(err){

      console.log(err);

    } else {

      res.render('index', { 
        title: 'Restaurante Maduro',
        menus: results 
      });
    }

  });
  
});

module.exports = router;
