const wrongroute = (req,res)=>{
  res.status(401).send("route can't be accessed..");
}

module.exports = wrongroute;