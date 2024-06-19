const mongoose = require('mongoose');

const dbSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  contactNumber:{
    type:Number,
    required:true
  },
  username:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  emailId:{
    type:String,
    required:true
  },
  token:{
    type:String
  }
},{timestamps:true});

const TaskManager = mongoose.model("TaskManager",dbSchema);
module.exports = TaskManager;