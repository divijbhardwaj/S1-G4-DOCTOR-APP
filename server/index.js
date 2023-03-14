const express = require('express')
const bodyParser = require('bod')
const app = express()
const port = 3009

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})