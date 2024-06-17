const TaskManager = require('../models/db_model.js');
const homepage = async(req,res)=>{
  const task = await TaskManager.create(req.body);
  res.status(200).json(task);
}

module.exports = {homepage};