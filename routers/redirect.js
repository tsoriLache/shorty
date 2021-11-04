const express = require('express');
const router = express.Router();
const db = require('../globalurlobj')

//stats
router.use('/',function(req, res){

})

router.get('/:uid', function (req, res) {
    const { uid } = req.params;
    const originalUrl = db[uid];
    res.redirect(`${originalUrl}`);
})

  
module.exports = router;