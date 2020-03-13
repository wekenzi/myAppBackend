const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  
});

const Client = mongoose.model('client',ClientSchema);
module.exports = Client;
