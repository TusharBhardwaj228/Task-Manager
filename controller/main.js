const jwt = require('jsonwebtoken');
const errorhandler = require('../error-handling/errorHandling.js');
const TaskManager = require('../models/db_model.js');
const homepage = async(req,res)=>{
  const{name, contactNumber, username, password, emailId} = req.body;
  try{
    const task = await TaskManager.create(req.body);
    const id = task._id;
    const token = jwt.sign({id},process.env.JWT_TOKEN,({expiresIn:"3d"}));
    res.status(200).json({id, token});
  }
  catch(error){
    const err = errorhandler(error);
    console.log(err);
    res.status(400).json({msg:err});
  } 
  
}

module.exports = {homepage};