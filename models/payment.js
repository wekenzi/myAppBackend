const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
  clientId:{
    type:String,
    default: null
  },
  name:{
    type:String,
    required:[true,'Name is required'],
    default: null
  },
  value:{
    type:Number,
    required:[true,'Value is required'],
    default: null
  },
  date:{
    type:Date,
    required:[true,'Date is required'],
    default: null
  },
  currency:{
    type:String,
    required:[true,'currency is required'],
    default: null
  },
  freelancers:{
    type:[],
    required:[true,'Employees are required'],
    default: null
  },
  
  
});

const Payment = mongoose.model('payment',PaymentSchema);
module.exports = Payment;
