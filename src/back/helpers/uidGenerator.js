let uid = 999999;

module.exports = function generateUId(){
    const shortUrl = `${uid.toString(36)}`;
    uid+=Math.floor(Math.random()*10)
    return shortUrl;
}

