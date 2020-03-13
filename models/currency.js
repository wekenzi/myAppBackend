const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CurrencySchema = new Schema({
  clientId:{
    type:String,
    default: null
  },
  name:{
    type:String,
    required:[true,'Name is required'],
    default: null
  },
  desc:{
    type:String,
    default: null
  }
  
  
});

const Currency = mongoose.model('currency',CurrencySchema);
module.exports = Currency;
