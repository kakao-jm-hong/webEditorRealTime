const express = require('express'); //express를 설치했기 때문에 가져올 수 있다.
const app = express();
const winston = require('winston');
const logger = winston.createLogger();
const request = require('request');

app.get(`/oauth/:coperation`, (req, res) => {
    const coperation = req.params.coperation;
    const code = req.param('code');
    switch(coperation){
        case 'kakao':
        break;
        case 'google':
        break;
        case 'naver':
        break;
    }



    res.send("test"+code);
})

app.listen(8080);