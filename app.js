const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>{
  res.send('Random Password Generator')
})

app.listen(port,() =>{
  console.log(`express server is running o http://localhost:${port}`)
})