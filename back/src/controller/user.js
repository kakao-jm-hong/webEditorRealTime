const express = require('express');
const router = express.Router();
const winston = require('winston');
const logger = winston.createLogger();
const qs = require('qs');
const fetch = require('node-fetch');
const jwt = require('../modules/jwt');

router.get('/certification', async (req, res) => {
    console.log('certificate');
    const [type, token] = req.get('Authorization').split(' ');
    const verify = await jwt.verify(token);
    const result =  {id:verify.id, nickname: verify.nickname, userImage: verify.userImage};
    console.log(result);
    res.send(result);
});

module.exports = router;