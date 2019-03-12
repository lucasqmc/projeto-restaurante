var express = require('express');
var router = express.Router();
var conn = require('./../inc/query_tb_menu');

conn.getMenu().then((results,err) => {

    if(err){

      console.log(err);

    } else {

      router.get('/', function(req, res, next) {

        res.render('index', { 
          title: 'Restaurante Maduro',
          menus: results 
        });
        
      });

    }

});


module.exports = router;
