const express = require('express');
const router = express.Router();
const winston = require('winston');
const logger = winston.createLogger();
const qs = require('qs');
const fetch = require('node-fetch');
const jwt = require('../modules/jwt');

router.get('/certification', async (req, res) => {
    const [type, token] = req.get('Authorization').split(' ');
    const verify = await jwt.verify(token);

    res.send(verify);
});

module.exports = router;