const express = require('express');
const router = express.Router();
const freelancerModel = require('../models/freelancer');

// Get All
router.get('/',(req,res,next)=>{
  freelancerModel.find({clientId:req.clientId},{_id:1,name:1,job:1,payslip:1,currency:1}).then((data)=>{
    res.send(data);
  }).catch(next);
});
// Get By ID
router.get('/:id',(req,res,next)=>{
  freelancerModel.findById({_id:req.params.id}).then((data)=>{
    res.send(data);
  }).catch(next);
});
// Add New
router.post('/',(req,res,next)=>{
  req.body.clientId = req.clientId
  freelancerModel.create(req.body).then((data)=>{
    res.send(data);
  }).catch(next);
});
// Edit By ID
router.put('/:id',(req,res,next)=>{
  freelancerModel.findByIdAndUpdate({_id:req.params.id},req.body,{new: true}).then((data)=>{
    res.send(data);
  }).catch(next);
});
// Delete
router.delete('/:id',(req,res,next)=>{
  freelancerModel.findByIdAndRemove({_id:req.params.id}).then((data)=>{
    res.send(data);
  }).catch(next);
});


module.exports = router;
