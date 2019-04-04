const express = require('express')
const app = express()
 
app.get('/users', function (req, res) {
  res.json('Hello World')
})

app.get('/user/:id', function (req, res) {
  res.json('Hello World')
})

app.post('/user', function (req, res) {
  res.json('Hello World')
})

app.put('/user/:id', function (req, res) {
  res.json('Hello World')
})

app.delete('/user/:id', function (req, res) {
  res.json('Hello World')
})
 
app.listen(3000, () => {
  console.log('Server ON!')
})
