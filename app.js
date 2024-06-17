require('dotenv').config();
const express = require('express');
const app = express();
const routers = require('./routes/main.js');
app.use(express.json());

app.use('/Homepage',routers);

const port = process.env.PORT || 5000;
app.listen(port, ()=>console.log(`Server is listening at port ${port}`));