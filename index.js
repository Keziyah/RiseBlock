var express = require('express')
var app = express()

var path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


app.listen(3000, function () {
  console.log("**** View Keziyah's project at localhost:3000 ****")
})