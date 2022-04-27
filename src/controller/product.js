const createError = require('http-errors')
const productsModel = require('../models/product')

let products = [
  {
    id: 1,
    name: 'baju',
    price: 1000,
    stock: 20
  }
]

const insert = (req, res, next) => {
  const { id, name, price, stock } = req.body
  products.push({
    // jika sama nama key nya boleh dihapus
    id,
    name,
    stock,
    price
  })
  res.json({
    message: 'data berhasil ditambahkan ',
    data: req.body
  })
}

const deleteProduct = (req, res, next) => {
  const id = req.params.id
  products = products.filter((item) => item.id !== id)
  res.json({
    message: 'data berhasil dihapus id = ' + id
  })
}

const update = (req, res, next) => {
  const { name, price, stock } = req.body
  const id = req.params.id
  //   console.log(typeof req.params.id);
  products = products.map((item) => {
    if (item.id === id) {
      const result = {
        id,
        name,
        price,
        stock
      }
      return result
    } else {
      return item
    }
  })
  res.json({
    message: 'data berhasil di update',
    data: req.body
  })
}

const getProduct = (req, res, next) => {
  res.json({
    data: products
  })
}

const showProduct = async (req, res, next) => {
  try {
    const id = req.params.id
    const result = await productsModel.getProductById(id)
    res.json({
      data: result.rows[0]
    })
  } catch (error) {
    console.log(error)
    // next(createError(500, 'error ada di sini'))
    next(new createError.NotFound())
    // next(new createError.InternalServerError())
  }
}

module.exports = {
  getProduct,
  delete: deleteProduct,
  showProduct,
  insert,
  update
}
