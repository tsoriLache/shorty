const express = require('express');
const router = express.Router();
const { getOriginalUrl,addVisitToCounter } = require('../db');


router.get('/:uid', function (req, res) {
    const { uid } = req.params;
    const originalUrl = getOriginalUrl(uid);
    addVisitToCounter(uid);
    res.redirect(`${originalUrl}`);
})

  
module.exports = router;