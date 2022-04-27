const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const productController = require('./src/controller/product')

app.use(express.json())

app.listen(port, () => {
  console.log(`example app listening at http://localhost:${port}`)
})

// show
app.get('/users', (req, res, next) => {
  res.json({
    data: users
  })
})

// delete
app.delete('/users/:id', (req, res, next) => {
  const id = req.params.id
  users = users.filter((item) => item.id != id)
  res.json({
    message: 'data berhasil dihapus id = ' + id
  })
})

// insert
app.post('/users', (req, res, next) => {
  const { id, username, name, email } = req.body
  users.push({
    id,
    username,
    name,
    email
  })
  res.json({
    message: 'data berhasil ditambahkan',
    body: req.body
  })
//   res.json({
//     message: "data berhasil ditambahkan ",
//   });
})

app.put('/users/:id', (req, res, next) => {
  const { username, name, email } = req.body
  const id = req.params.id
  users = users.map((el) => {
    if (el.id === id) {
      const result = {
        id,
        username,
        name,
        email
      }
      return result
    } else {
      return el
    }
  })
  res.json({
    message: 'data berhasil di update',
    body: req.body
  })
})

// app.patch("/users/:id", (req, res, next) => {
//   const { username, name, email } = req.body;
//   const id = req.params.id;
//   users = users.map((el) => {
//     if (el.id === id) {
//       const result = {
//         id,
//         username,
//         name,
//         email,
//       };
//       return result;
//     } else {
//       return el;
//     }
//   });
//   res.send({
//       message: "data berhasil di update",
//       body : req.body
//   });
// });
