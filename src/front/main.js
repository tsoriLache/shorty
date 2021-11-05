'use strict'
import "./styles/style.css";
import axios from 'axios';
import isValidHttpUrl from './js/validator.js'
import { cleanUserMsgDisplay,appendStats } from "./js/disply";

const enableShortBtn = ()=>{
    document.getElementById("short-btn").disabled = false;
}

const disableShortBtn = ()=>{
    if(!document.getElementById('url-inpt').value){
        document.getElementById("short-btn").disabled = true;
    }
}

const ShortenUrl = async()=>{
  cleanUserMsgDisplay()
  const originalUrl = document.getElementById('url-inpt').value;
  if(isValidHttpUrl(originalUrl)){
    try{
      const res = await axios.post('http://localhost:3000/api/shorturl',{originalUrl})
      document.getElementById('short-link').innerText = res.data;
      document.getElementById('short-link').setAttribute('href', `${res.data}`);
    }catch(err){
      document.getElementById('err-msg').innerText = `${err.message} NOT VALID URL`;
    }
  }else{
    document.getElementById('err-msg').innerText = 'NOT VALID URL';
  }
  document.getElementById('user-msg').classList.toggle('not-disply')
}

const getStats = async()=>{
  try {
    const arr = document.getElementById('short-link').href.split('/');
    const uid = arr[arr.length-1]
    const res = await axios.get(`/api/statistic/${uid}`)
    console.log(res.data);
    appendStats(res.data)
  }catch{
    document.getElementById('stats').innerText = 'make sure you see the short url above'
  }
}


//event listeners
document.getElementById('url-inpt').addEventListener('input',enableShortBtn)
document.getElementById('url-inpt').addEventListener('blur',disableShortBtn)
document.getElementById('short-btn').addEventListener('click',ShortenUrl)
document.getElementById('stats-btn').addEventListener('click',getStats)