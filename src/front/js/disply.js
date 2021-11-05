export  function cleanUserMsgDisplay(){
    document.getElementById('err-msg').innerText = '';
    document.getElementById('short-link').innerText = '';
}

export function appendStats({originalUrl,counter,dateCrated}){
    document.getElementById('stats').innerText = `original url:${originalUrl},\nvisits:${counter},\ncreation date:${dateCrated}`

}