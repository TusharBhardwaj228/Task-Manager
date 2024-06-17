const mongoose = require('mongoose');

const dbConnect=async()=>{
  try{
    return await mongoose.connect(process.env.CONNECTION_STRING);
  }catch(error){
    console.log(error);
  }
}

module.exports = dbConnect;