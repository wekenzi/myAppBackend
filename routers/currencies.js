const express = require('express');
const router = express.Router();
const currencyModel = require('../models/currency');

// Get All
router.get('/',(req,res,next)=>{
  currencyModel.find({clientId:req.clientId}).then((data)=>{
    res.send(data);
  }).catch(next);
});
// Get By ID
router.get('/:id',(req,res,next)=>{
  currencyModel.findById({_id:req.params.id}).then((data)=>{
    res.send(data);
  }).catch(next);
});
// Add New
router.post('/',(req,res,next)=>{
  req.body.clientId = req.clientId
  currencyModel.create(req.body).then((data)=>{
    res.send(data);
  }).catch(next);
});
// Edit By ID
router.put('/:id',(req,res,next)=>{
  currencyModel.findByIdAndUpdate({_id:req.params.id},req.body,{new: true}).then((data)=>{
    res.send(data);
  }).catch(next);
});
// Delete
router.delete('/:id',(req,res,next)=>{
  currencyModel.findByIdAndRemove({_id:req.params.id}).then((data)=>{
    res.send(data);
  }).catch(next);
});


module.exports = router;
