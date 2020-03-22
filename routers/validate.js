const express = require('express');
const router = express.Router();
const clientModel = require('../models/client');

// Get Projects List Ids
router.get('/:acc/:email',(req,res,next)=>{
  clientModel.findOneAndUpdate({email:req.params.email,valid:req.params.acc},{valid:null},{new: true}).then((data)=>{
    res.status(301).redirect('http://localhost:4200/login');
  }).catch(next);
});



module.exports = router;
