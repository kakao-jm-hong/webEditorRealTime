const express = require('express');
const app = express();

// controller
const ouathRouter = require('./controller/oauth');

app.use('/oauth', ouathRouter);

const port = 8081;

app.listen(port);