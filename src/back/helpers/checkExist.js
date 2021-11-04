const db = require('../db.js')
module.exports =  function isUrlExist(originalUrl){
    for(urlObj of db){
        if(urlObj.originalUrl===originalUrl){
            return urlObj.shortUrl;
        }
    }
    return false;
}