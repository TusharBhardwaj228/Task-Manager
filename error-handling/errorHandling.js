function errorhandler(err,req,res,next){
  let errors = {name:"", contactNumber:"", username:"", password:"", emailId:""};
  const arr = ["name", "contactNumber", "username", "password", "emailId"];
  if(err.message === "Invalid password"){
    errors.password = 'password is not correct.'
  }
  if(err.message === "Invalid username"){
    errors.username = 'username is not valid.'
  }
  if(err.code===11000){
    arr.forEach((element)=>{
      if(err.keyValue[element]){
        return errors[element] = `${element} already exist..`;
      }     
    })
  } 
  if(err.message.includes("validation failed")){
    Object.values(err.errors).forEach((error)=>{
      errors[error.properties.path]=error.properties.message;
    })
  }
  return errors;
}

module.exports = errorhandler;