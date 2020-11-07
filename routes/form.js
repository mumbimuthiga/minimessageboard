var express = require('express');
var router = express.Router();



router.get('/form' ,function(req,res,next){
    res.render('form' ,{user:'Hey' ,text:'Nature'})
   res.send('respond with a form')
  })

  
module.exports = router;