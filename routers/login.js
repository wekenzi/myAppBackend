const express = require('express');
const login = express.Router();
const clientModel = require('../models/client');
const jwt = require('jsonwebtoken');

login.post('/',(req,res,next)=>{
  clientModel.find({email:req.body.email})
  .then((data)=>{
    if(data.length < 1){
      return res.status(401).json({
        message:'Check email and password'
      })
    }else{
      if(data[0].password != req.body.password){
        return res.status(406).json({
          message:'Check email and password'
        })
      }else{
        let token = jwt.sign(
          {email:data[0].email,clientId:data[0]._id},
          'air_port@123',
          // {
          //   expiresIn:86400
          // }
        );
        return res.status(200).json({
          token: token,
          // expiresIn:86400
        })
      }
    }
  }).catch(next);
});



module.exports = login;
