const jwt = require('jsonwebtoken');
const TaskManager = require('../models/db_model.js');
const homepage = async(req,res)=>{
  const{name, contactNumber, username, password, emailId} = req.body;
  try{
    const token = jwt.sign({name,contactNumber,username,password,emailId},process.env.JWT_TOKEN,({expiresIn:"30d"}));
    req.body.token = token;
    const task = await TaskManager.create(req.body);
    res.status(200).json({task});
  }
  catch(error){
    res.status(400).json({msg:"something went wrong."});
  } 
  
}

module.exports = {homepage};