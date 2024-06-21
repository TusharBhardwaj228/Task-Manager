require('dotenv').config();
const express = require('express');
const app = express();
require('express-async-errors');
const routers = require('./routes/main.js');
const dbConnect = require('./db/db-connect.js');
const wrongroute = require('./middlewares/wrongroute.js');

app.use(express.static('./public'));
app.use(express.json());
app.use('/Homepage',routers);
app.use(wrongroute);
const port = process.env.PORT || 5000;
async function main(){
  try{
    await dbConnect();
    app.listen(port, ()=>console.log(`Server is listening at port ${port}`));
  }catch(error){
    console.log(error);
  }
}
main();
