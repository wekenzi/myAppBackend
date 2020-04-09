const mongoose = require('mongoose');
const Schema = mongoose.Schema;

function genarateVerfiy() {
  // return Array(40).fill(null).map(() => Math.random().toString(36).substr(2)).join('');
  return null
}

const ClientSchema = new Schema({
  name:{
    type:String,
    required:[true,'Name is required']
  },
  email:{
    type:String,
    required:[true,'Email is required']
  },
  password:{
    type:String,
    required:[true,'Password is required']
  },
  valid:{
    type:String,
    default: genarateVerfiy(),
  },
  
});

const Client = mongoose.model('client',ClientSchema);
module.exports = Client;
