// Configuration 
require('./config');
// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
// Init app
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.get('/users', function (req, res) {
  res.json('Hello World')
})

app.get('/user/:id', function (req, res) {
  res.json('Hello World')
})

app.post('/user', function (req, res) {
  const body = req.body 
  if (body.name === undefined ) {
    res.status(400).json({
      ok: false,
      message: 'Name is required'
    });
  } else {
    res.json({person: body})
  }
})
// Send params is with :name 
app.put('/user/:id', function (req, res) {
  const id = req.params.id
  const body = req.body 
  res.json({id, person:  body})
})

app.delete('/user/:id', function (req, res) {
  res.json('Hello World')
})
 
app.listen(process.env.PORT, () => {
  console.log('Server ON!', process.env.PORT)
})
