const express = require('express');
const router = express.Router();
const validator = require('validator')

router.post('/shorturl', async function(req, res,next) {
    const {originalUrl} = req.body;
    if(validator.isURL(originalUrl)){
        next()
    }else{
        next({status:400,message:'not valid url'}) 
    }
})

module.exports = router;
