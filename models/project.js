const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
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
  },
  duration:{
    type:String,
    default: null
  },
  freelancers:{
    type:[],
    required:[true,'freelancers are required'],
    default: null
  },
  
  
});

const Project = mongoose.model('project',ProjectSchema);
module.exports = Project;
