const express = require('express');
const router = express.Router();
const clientModel = require('../models/client');

router.get('/',(req,res,next)=>{
  clientModel.find({_id:req.clientId}).then((data)=>{
    data[0].password = null;
    res.send(data);
  }).catch(next);
});

router.post('/',(req,res,next)=>{
  clientModel.create(req.body).then((client)=>{
    res.send(client);
  }).catch(next);
});

router.put('/',(req,res,next)=>{
  clientModel.findByIdAndUpdate({_id:req.clientId},req.body,{new: true}).then((client)=>{
    res.send(null);
  }).catch(next);
});

router.delete('/:id',(req,res,next)=>{
  clientModel.findByIdAndRemove({_id:req.params.id}).then((client)=>{
    res.send(client);
  }).catch(next);
});


module.exports = router;
