const express = require('express');
const register = express.Router();
const clientModel = require('../models/client');

register.post('/',(req,res,next)=>{ 
  clientModel.find({email:req.body.email})
  .then((data)=>{
    if(data.length > 0){
      return res.status(409).json({
        message:'This email is already exists'
      })
    }else{
      clientModel.create(req.body).then((data)=>{
        return res.status(200).json({
          message:'Thanks for register'
        });
      })
    }
  }).catch(next);
});



module.exports = register;
