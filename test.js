const axios =require( 'axios');
const x = async()=>{
    const res = await axios.post('http://localhost:3000/api/shorturl',{originalUrl:'https://github.com/tsoriLache/pokedex/blob/adjusted-client-side/src/index.js'})
    console.log(res.body);

}

const y = async()=>{
    const res = await axios.get('http://localhost:3000/s/lflr')
    console.log(res);
}

x()
y()