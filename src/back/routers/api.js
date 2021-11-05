const express = require('express');
const router = express.Router();
const urlValidator = require('./urlValidator')
const {getCounter,searchUrlInDB,addNewUrlToDB, getOriginalUrl, getCreationDate} = require('../db/db.js')

router.post('/shorturl/',urlValidator, function (req, res) {
    const {originalUrl} = req.body;
    if(searchUrlInDB(originalUrl)){
        res.end(`${searchUrlInDB(originalUrl)}`)
    }else{
        try{
            const uid = addNewUrlToDB(originalUrl)
            res.end(`http://localhost:3000/s/${uid}`);
        }catch(err){
            next({status:500,message:'problem in DB'})
        }
    }
})

router.get('/statistic/:uid', function (req, res) {
    const { uid } = req.params;
    const stats = { originalUrl:getOriginalUrl(uid),
                    shortUrl:`http://localhost:3000/s/${uid}`,
                    dateCrated:getCreationDate(uid),
                    counter:getCounter(uid)
                  }
    res.json(stats)
})

module.exports = router;
