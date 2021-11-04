const generateUId = require('./helpers/uidGenerator')

const db = {}

function searchUrlInDB(originalUrl){
    const dbKeys = Object.keys(db)
    for(key of dbKeys){  
        if(db[key].originalUrl===originalUrl){
            return db[key].shortUrl;
        }
    }
    return false;
}

function getOriginalUrl(uid){
    return db[uid].originalUrl;
}

function getCounter(uid){
    return db[uid].counter;
}

function getCreationDate(uid){
    return db[uid].dateCrated;
}

function addNewUrlToDB(originalUrl){
    const uid = generateUId();
    db[uid] = { originalUrl,
                shortUrl:`http://localhost:3000/s/${uid}`,
                dateCrated:new Date().toString(),
                counter:0
              }
    return uid;
}

function addVisitToCounter(uid){
     db[uid].counter++;
}



module.exports = {
    getOriginalUrl,
    searchUrlInDB,
    addNewUrlToDB,
    addVisitToCounter,
    getCreationDate,
    getCounter
}
