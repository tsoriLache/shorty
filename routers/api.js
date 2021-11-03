const express = require('express');
const router = express.Router();
const fs = require('fs');
const fsp = require('fs/promises');
const path = require('path');
const bp = require('body-parser')
router.use(bp.json())
router.use(bp.urlencoded({ extended: true }))
const db = require('../globalurlobj')


const generateShortUrl = ()=>{
    let uid = 999999;
    const shortUrl = `${uid.toString(36)}`;
    uid+=Math.floor(Math.random()*10)
    return shortUrl;
}

router.post('/shorturl/', function (req, res) {
    const {originalUrl} = req.body;
    const shortUrl = generateShortUrl();
    db[shortUrl] = originalUrl;
    console.log(db);
    res.send(`http://localhost:3000/s/${shortUrl}`);
    res.end();
})

// router.get('/:uid', function (req, res) {
//     const { uid } = req.params;
//     const originalUrl = db[uid];
//     res.redirect(`${originalUrl}`);
// })

router.get('/statistic/:shorturl-id', function (req, res) {
    res.send('root')
})

module.exports = router;
