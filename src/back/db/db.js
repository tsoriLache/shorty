const { readFileSync, writeFileSync } = require('fs');
// const generateUId = require('./helpers/uidGenerator')
const path = require('path');


function generateUId(){
    let uid = getLastUid()?getLastUid():999
    uid+=Math.floor(Math.random()*10)
    const shortUrl = `${uid.toString(36)}`;
    return shortUrl;
}


function searchUrlInDB(originalUrl){
    const db = JSON.parse(readFileSync(path.resolve(`./src/back/db/db.json`)))
    const dbKeys = Object.keys(db)
    for(key of dbKeys){  
        if(db[key].originalUrl===originalUrl){
            return db[key].shortUrl;
        }
    }
    return false;
}

function getLastUid(){
    const db = JSON.parse(readFileSync(path.resolve(`./src/back/db/db.json`)))
    const dbKeys = Object.keys(db)
    return dbKeys[dbKeys.length-1]
}

function getOriginalUrl(uid){
    const db = JSON.parse(readFileSync(path.resolve(`./src/back/db/db.json`)))
    return db[uid].originalUrl;
}

function getCounter(uid){
    const db = JSON.parse(readFileSync(path.resolve(`./src/back/db/db.json`)))
    return db[uid].counter;
}

function getCreationDate(uid){
    const db = JSON.parse(readFileSync(path.resolve(`./src/back/db/db.json`)))
    return db[uid].dateCrated;
}

function addNewUrlToDB(originalUrl){
    const db = JSON.parse(readFileSync(path.resolve(`./src/back/db/db.json`)))
    const uid = generateUId();
    db[uid] = { originalUrl,
                shortUrl:`http://localhost:3000/s/${uid}`,
                dateCrated:new Date().toString(),
                counter:0
              }
    writeFileSync(path.resolve(`./src/back/db/db.json`),JSON.stringify(db))
    return uid;
}

function addVisitToCounter(uid){
    const db = JSON.parse(readFileSync(path.resolve(`./src/back/db/db.json`)))
     db[uid].counter++;
     writeFileSync(path.resolve(`./src/back/db/db.json`),JSON.stringify(db))
}



module.exports = {
    getOriginalUrl,
    searchUrlInDB,
    addNewUrlToDB,
    addVisitToCounter,
    getCreationDate,
    getCounter,
    getLastUid
}
