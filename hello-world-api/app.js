const express = require('express');
const { languages } = require('./services/mockLanguages')
const app = express()
const port = 3200
app.use(express.static('public'))

app.get('/languages', (req, res) => {
  const resp = languages()
  res.send(resp)
})

app.get('/mocked/languages/', (req, res) => {
    const resp = languages()
    res.send(resp)
  })


app.listen(port, () => {
  console.log(`Hello World API listening at http://localhost:${port}`)
})