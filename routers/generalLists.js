const express = require('express');
const router = express.Router();
const projectModel = require('../models/project');
const nationalityModel = require('../models/nationality');
const currencyModel = require('../models/currency');

// Get Projects List Ids
router.get('/projectsListId',(req,res,next)=>{
  projectModel.find({clientId:req.clientId},{_id:1,name:1}).then((data)=>{
    res.send(data);
  }).catch(next);
});

// Get Nationalities List Ids
router.get('/nationalitiesListId',(req,res,next)=>{
  nationalityModel.find({clientId:req.clientId},{_id:1,name:1}).then((data)=>{
    res.send(data);
  }).catch(next);
});

// Get Currencies List Ids
router.get('/currenciesListId',(req,res,next)=>{
  currencyModel.find({clientId:req.clientId},{_id:1,name:1}).then((data)=>{
    res.send(data);
  }).catch(next);
});



module.exports = router;
