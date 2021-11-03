'use strict'
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';


const isValidHttpUrl = (string)=> {
    let url;
    try {
      url = new URL(string);
      console.log(url);
    } catch (_) {
      return false;  
    }
    return url.protocol === "http:" || url.protocol === "https:";
}

const enableShortBtn = ()=>{
    document.getElementById("short-btn").disabled = false;
}

const disableShortBtn = ()=>{
    if(!document.getElementById('url-inpt').value){
        document.getElementById("short-btn").disabled = true;
    }
}




//event listeners
document.getElementById('url-inpt').addEventListener('input',enableShortBtn)
document.getElementById('url-inpt').addEventListener('blur',disableShortBtn)
document.getElementById('short-btn').addEventListener('click',ShortenUrl)