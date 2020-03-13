const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NationalitySchema = new Schema({
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

const Nationality = mongoose.model('nationality',NationalitySchema);
module.exports = Nationality;
