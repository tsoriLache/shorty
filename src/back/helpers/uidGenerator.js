const {getLastUid} = require('../db.js')

let uid = getLastUid();

module.exports = function generateUId(){
    const shortUrl = `${uid.toString(36)}`;
    uid+=Math.floor(Math.random()*10)
    return shortUrl;
}

