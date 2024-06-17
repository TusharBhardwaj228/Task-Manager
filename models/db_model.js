const mongoose = require('mongoose');

const dbSchema = new mongoose.Schema({
  username:{
    required:true,
    type:String
  },
  password:{
    required:true,
    type:String
  }
},{timestamps:true});

const TaskManager = mongoose.model("TaskManager",dbSchema);
module.exports = TaskManager;