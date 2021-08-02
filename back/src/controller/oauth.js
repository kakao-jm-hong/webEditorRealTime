const express = require('express');
const router = express.Router();
const winston = require('winston');
const logger = winston.createLogger();
const qs = require('qs');
const fetch = require('node-fetch');

class Kakao {
    constructor(code) {
        this.url = 'https://kauth.kakao.com/oauth/token';
        this.clientID = '40743e16f1a2a35513c0d4bd149aa080';
        this.clientSecret = 'riUIwNSJrzZQojJ2W7sH3kEo3Qdv2tM4';
        this.redirectUri = 'http://localhost:8081/oauth/kakao';
        this.code = code;

        // userInfo
        this.userInfoUrl = 'https://kapi.kakao.com/v2/user/me';
    }
}

//  TODO Naver

//  TODO Google

const getAccessToken = async (options) => {
    try {
            return await fetch(options.url, {
                method: 'POST',
                headers: {
                    'content-type':'application/x-www-form-urlencoded;charset=utf-8'
                },
                body: qs.stringify({
                    grant_type: 'authorization_code',//특정 스트링
                    client_id: options.clientID,
                    client_secret: options.clientSecret,
                    redirectUri: options.redirectUri,
                    code: options.code,
                }),
            }).then(res => res.json());
    }catch(e) {
        logger.info("error", e);
    }
};

const getUserInfo = async (url, access_token) => {
    try {
        return await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                'Authorization': `Bearer ${access_token}`
            }
        }).then(res => res.json());
    }catch(e) {
        logger.info("error", e);
    }
};

const getOption = (coperation, code)=> {
    switch(coperation){
        case 'kakao':
            return new Kakao(code);
        break;
        case 'google':
            // return new Google(code);
        break;
        case 'naver':
            // return new Naver(code);
        break;
    }
}

router.get(`/:coperation`, async (req, res) => {
    const coperation = req.params.coperation;
    const code = req.param('code');
    const options = getOption(coperation, code);
    const token = await getAccessToken(options);
    const userInfo = await getUserInfo(options.userInfoUrl, token.access_token);
    res.send(userInfo);
});

module.exports = router;