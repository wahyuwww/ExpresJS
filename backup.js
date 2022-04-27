const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const productController = require('./src/controller/product')

// apapun methodnya dan apapun path nya akan menjalankan express
app.use(express.json())

// perparti modul => modul yg sudah disediakan orang
// core modul => yg sudah ada di framwork
// local modul => yg kita buat
app.get('/helloworld', (req, res, next) => {
  // next digunakan untuk middleware
  res.send('Hello Dunia')
})

app.listen(port, () => {
  console.log(`example app listening at http://localhost:${port}`)
})

// app.listen(3000, () => {
//     console.log(`example port 3000`);
// })

let products = [
  {
    id: 1,
    name: 'baju',
    price: 1000,
    stoct: 20
  }
]
app.get('/products', (req, res, next) => {
  res.json({
    data: products
  })
})

// req membuat nangkap data
app.delete('/products/:id', (req, res, next) => {
  const id = req.params.id
  products = products.filter((item) => item.id != id)
  res.json({
    message: 'data berhasil dihapus id = ' + id
  })
})

app.post('/products', (req, res, next) => {
  // console.log(req.body);
  // const id  = req.body.id
  // const name  = req.body.name
  // const stock = req.body.stock
  // const price = req.body.price
  const { id, name, price, stock } = req.body
  products.push({
    // jika sama nama key nya boleh dihapus
    id,
    name,
    stock,
    price
  })
  res.json({
    message: 'data berhasil ditambahkan '
  })
})
