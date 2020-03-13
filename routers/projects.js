const express = require('express');
const router = express.Router();
const projectModel = require('../models/project');

// Get All
router.get('/',(req,res,next)=>{
  projectModel.find({clientId:req.clientId}).then((data)=>{
    res.send(data);
  }).catch(next);
});
// Get By ID
router.get('/:id',(req,res,next)=>{
  projectModel.findById({_id:req.params.id}).then((data)=>{
    res.send(data);
  }).catch(next);
});
// Add New
router.post('/',(req,res,next)=>{
  req.body.clientId = req.clientId
  projectModel.create(req.body).then((data)=>{
    res.send(data);
  }).catch(next);
});
// Edit By ID
router.put('/:id',(req,res,next)=>{
  projectModel.findByIdAndUpdate({_id:req.params.id},req.body,{new: true}).then((data)=>{
    res.send(data);
  }).catch(next);
});
// Delete
router.delete('/:id',(req,res,next)=>{
  projectModel.findByIdAndRemove({_id:req.params.id}).then((data)=>{
    res.send(data);
  }).catch(next);
});


module.exports = router;
