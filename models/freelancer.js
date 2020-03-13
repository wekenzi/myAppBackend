const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FreelancerSchema = new Schema({
  clientId:{
    type:String,
    default: null
  },
  name:{
    type:String,
    required:[true,'Name is required'],
    default: null
  },
  email:{
    type:String,
    default: null
  },
  birthDate:{
    type:Date,
    default: null
  },
  personalID:{
    type:String,
    default: null
  },
  job:{
    type:String,
    required:[true,'Job is required'],
    default: null
  },
  gender:{
    type:String,
    required:[true,'Gender is required'],
    default: null
  },
  payslip:{
    type:Number,
    required:[true,'payslip is required'],
    default: null
  },
  HPD:{
    type:Number,
    required:[true,'Hours per day is required'],
    default: null
  },
  workingDays:{
    type:Number,
    required:[true,'workingDays is required'],
    default: null
  },
  phone:{
    type:String,
    default: null
  },
  nationality:{
    type:String,
    default: null
  },
  currency:{
    type:String,
    required:[true,'currency is required'],
    default: null
  },
  
  
});

const Freelancer = mongoose.model('freelancer',FreelancerSchema);
module.exports = Freelancer;
