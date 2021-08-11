const express = require('express');
const cors = require('cors');
const app = express();
const whitelist = ['http://localhost:3000'];

// DB 설정
// const db_config = require(__dirname + '/config/database.js');
// const conn = db_config.init();

const corsOptions = {
  origin: function(origin, callback){
  var isWhitelisted = whitelist.indexOf(origin) !== -1;
  callback(null, isWhitelisted); 
  },
  credentials:true
};

// app.get('/test', function (req, res) {
//   console.log('tst');
//   var sql = 'SELECT * FROM Test';    
//   conn.query(sql, function (err, rows, fields) {
//       if(err) console.log('query is not excuted. select fail...\n' + err);
//       else res.send(rows);
//   });
// });

const ouathRouter = require('./controller/oauth');
const userRouter = require('./controller/user');

app.use(cors(corsOptions));
app.use('/oauth', ouathRouter);
app.use('/user', userRouter);
const port = 8081;

app.listen(port);