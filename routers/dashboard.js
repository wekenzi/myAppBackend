const express = require('express');
const router = express.Router();
const projectModel = require('../models/project');
const freelancerModel = require('../models/freelancer');
const paymentModel = require('../models/payment');
const currencyModel = require('../models/currency');

// Get DashBoard Data
router.get('/',(req,res,next)=>{
  let response = {
    freelancers:null,
    projects:null,
    payments:null,
    currencies:null
  }
  let projectsNumbers = projectModel.find({clientId:req.clientId}).countDocuments();
  let freelancersNumbers = freelancerModel.find({clientId:req.clientId}).countDocuments();
  let paymentsNumbers = paymentModel.find({clientId:req.clientId}).countDocuments();
  let currenciesNumbers = currencyModel.find({clientId:req.clientId}).countDocuments();

  Promise
    .all([projectsNumbers, freelancersNumbers, paymentsNumbers, currenciesNumbers])
    .then((values) => {
        response.projects = values[0];
        response.freelancers = values[1];
        response.payments = values[2];
        response.currencies = values[3];

        return res.send(response);
    })
    .catch(next);
});


module.exports = router;
