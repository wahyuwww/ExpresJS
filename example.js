const { genSalt } = require('bcrypt')
const bcrypt = require('bcrypt')
const coba = require('./helpers/coba.js')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())

// middlewer
app.post('/user', (req, res) => {
  res.send({
    message: 'CREATE NEW USER: POST /user',
    body: req.body
  })
})

app.get('/user', (req, res) => {
  res.send('GET USER LIST: GET /user')
})

app.get('/user/:id', (req, res) => {
  res.send('GET USER: GET /user/' + req.params.id)
})

app.listen(port, () => {
  console.log(`cli-nodejs-api listening at http://localhost:${port}`)
})
// app.get('/helloworld', (req, res) => {
//   res.send('Hello Dunia')
// });

const saltRounds = 10
const myPlaintextPassword = 'admin'

bcrypt.genSalt(saltRounds, function (err, salt) {
  bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
    // Store hash in your password DB.

  })
})

genSalt()
  .then((result) => {
    console.log(result)
  }).catch((err) => {
    console.log(err)
  })

const gen = async (salt) => {
  try {
    const res = await genSalt(salt)
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}

gen()
coba.product('baju')
