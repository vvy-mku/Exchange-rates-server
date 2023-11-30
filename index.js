const express = require('express')
const app = express()
const port = 3000


app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.get('/currencies', function(req, res) {
  res.send('Currencies')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})