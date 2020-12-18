const fetch = require('node-fetch')
const url = `http://www.omdbapi.com/?t=mr+deeds&apikey=c194e47e`

async function getData(){
  fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
};

exports.getData = getData;
