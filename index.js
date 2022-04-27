require('dotenv').config()
const express = require('express')
// const bodyParser = require("body-parser");
// const productController = require("./src/controller/product");
// const categoryController = require("./src/controller/category")
// const middle = require('./src/middleware/common')
const categoryRouter = require('./src/routes/category')
const productRouter = require('./src/routes/product')
const morgan = require('morgan')
const cors = require('cors')
const createError = require('http-errors')

// apapun methodnya dan apapun path nya akan menjalankan express
const app = express()
const PORT = process.env.PORT || 4000
app.use(express.json())
app.use(cors())

app.use(morgan('dev'))
// const db = process.env.DB_PORT
// console.log(typeof db)
// perparti modul => modul yg sudah disediakan orang
// core modul => yg sudah ada di framwork
// local modul => yg kita buat
app.get('/helloworld', (req, res) => {
  // next digunakan untuk middleware
  res.send('Hello Dunia')
})

app.listen(PORT, () => {
  console.log(`example app listening at http://localhost:${PORT}`)
})

// app.listen(3000, () => {
//     console.log(`example port 3000`);
// })

// product
// app.get('/products', productController.getProduct)
// // req membuat nangkap data
// app.delete('/products/:id', productController.delete)
// app.post("/products", middle.validate,productController.insert);
// app.put("/products/:id", productController.update)
app.use('/product', productRouter)

// category
// app.get('/category',categoryController.getCategory)
// app.post('/category',categoryController.insert)
// app.put('/category/:id',categoryController.update)
// app.delete('/category/:id',categoryController.deleteCategory)

app.use('/category', categoryRouter)
app.all('*', (req, res, next) => {
  next(new createError.NotFound())
})
app.use((err, req, res, next) => {
  const messError = err.message || 'Internal Server Error'
  const statusCode = err.status || 500

  res.status(statusCode).json({
    message: messError
  })
})
