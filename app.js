require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.get('/',(req,res)=>{
  res.send('Hello');
});

app.listen(port, ()=>console.log(`Server is listening at port ${port}`));