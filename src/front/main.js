'use strict'
import axios from 'axios';
import isValidHttpUrl from './js/validator.js'


const enableShortBtn = ()=>{
    document.getElementById("short-btn").disabled = false;
}

const disableShortBtn = ()=>{
    if(!document.getElementById('url-inpt').value){
        document.getElementById("short-btn").disabled = true;
    }
}

const ShortenUrl = async()=>{
  const originalUrl = document.getElementById('url-inpt').value;
  if(isValidHttpUrl(originalUrl)){
    try{
      const res = await axios.post('http://localhost:3000/api/shorturl',{originalUrl})
      document.getElementById('short-link').innerText = res.data;
      document.getElementById('short-link').setAttribute('href', `${res.data}`);
    }catch(err){
      document.getElementById('short-link-msg').innerText = `${err.message} NOT VALID URL`;
    }
  }else{
    document.getElementById('short-link-msg').innerText = 'NOT VALID URL';
  }
}

const getStats = async()=>{
  const arr = document.getElementById('short-link').href.split('/');
  const uid = arr[arr.length-1]
  const res = await axios.get(`http://localhost:3000/api/statistic/${uid}`)
  document.getElementById('stats').innerText = `${res.data.originalUrl},${res.data.counter},${res.data.dateCrated}`
}


//event listeners
document.getElementById('url-inpt').addEventListener('input',enableShortBtn)
document.getElementById('url-inpt').addEventListener('blur',disableShortBtn)
document.getElementById('short-btn').addEventListener('click',ShortenUrl)
document.getElementById('stats-btn').addEventListener('click',getStats)