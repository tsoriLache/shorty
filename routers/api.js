const express = require('express');
const router = express.Router();
const fs = require('fs');
const fsp = require('fs/promises');
const path = require('path');
const bp = require('body-parser')
router.use(bp.json())
router.use(bp.urlencoded({ extended: true }))
const generateShortUrl = require('../urlgenerator')


router.post('/shorturl/', function (req, res) {
    const originalUrl = req.body;
    const shortUrl = generateShortUrl()
    res.send('POST request to the homepage')
})

router.get('/statistic/:shorturl-id', function (req, res) {
    res.send('root')
})

module.exports = router;
