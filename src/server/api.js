const { response } = require('express')
const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')
const url = 'http://www.omdbapi.com/'
const apikey = '&apikey=c194e47e'


router.get('/**', async(req, res) => {
    try {
      console.log('server ok')
      const response = await fetch(url)
      console.log('res ok')
      const data = await response.json()
      console.log('movies ok\n', data)
      res.send(data)
    } catch(err){
      console.log('WEE WOO WEE WOO\n', err)
    }

})

module.exports = router;