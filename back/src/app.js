const express = require('express');
const cors = require('cors');
const app = express();
const whitelist = ['http://localhost:3000'];

const corsOptions = {
  origin: function(origin, callback){
  var isWhitelisted = whitelist.indexOf(origin) !== -1;
  callback(null, isWhitelisted); 
  },
  credentials:true
};


const ouathRouter = require('./controller/oauth');
const userRouter = require('./controller/user');

app.use(cors(corsOptions));
app.use('/oauth', ouathRouter);
app.use('/user', userRouter);
const port = 8081;

app.listen(port);