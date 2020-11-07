var express = require('express');
var router = express.Router();

const messages=[
  {
    text:'Hi! there',
    user:'Mumbi Muthiga',
    added:new Date()

  },
  {
    text:'Hi! there',
    user:'Venny Muthiga',
    added:new Date()

  },
  {
    text:'Hi! there',
    user:'Jacqueline Muthee',
    added:new Date()

  }
];




router.get('/' ,function(req,res,next){
  res.render('index' ,{
    title:'Hello'
  })
})
//Add user and message
router.get('/miniboard/add' ,function(req,res){
  res.render('miniboard_add',{
    title:'Add Article',
    messages:messages
  })
  //res.send('respond resource')
})
router.get('./miniboard/form',function(req,res){
  res.render('form' ,{
    messages:messages
  })
})
module.exports = router;
