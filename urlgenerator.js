

const generateShortUrl = ()=>{
    let uid = 999999;
    const shortUrl = `http://localhost:3000/s/${uid.toString(36)}`;
    uid+=Math.floor(Math.random()*10)
    return shortUrl;
}
module.export = generateShortUrl;