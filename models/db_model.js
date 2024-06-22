const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const dbSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true, "Please enter your name"]
  },
  contactNumber:{
    type:Number,
    unique:true,
    required:[true, "Please enter your contact number"]
  },
  username:{
    type:String,
    unique:true,
    required:[true, "Please enter your username"]
  },
  password:{
    type:String,
    required:[true, "Please enter your password"]
  },
  emailId:{
    type:String,
    unique:true,
    required:[true, "Please enter your Email ID"]
  }
},{timestamps:true});

dbSchema.pre('save', async function(next){
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

dbSchema.statics.login = async function(username, password){
  const user = await this.findOne({username});
  if(user){
    const auth = await bcrypt.compare(password, user.password);
    if(auth){
      return user;
    }
    throw Error("Invalid password");
  }

  throw Error("Invalid username");
  
}

const TaskManager = mongoose.model("TaskManager",dbSchema);
module.exports = TaskManager;