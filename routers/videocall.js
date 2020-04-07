const express = require('express');
const router = express.Router();
// Opentok
const OpenTok = require('opentok');
const opentok = new OpenTok('46657472', '16d65715cd1b878c0b395c8393feca78b02630fc');



router.get('/start',(req,res,next)=>{
  // clientModel.find({_id:req.clientId}).then((data)=>{
  // }).catch(next);
  res.send('hii');
  console.log('welcome');
  
});







module.exports = router;
