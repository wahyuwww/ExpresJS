const express = require('express')
const router = express.Router()
const productController = require('../controller/product')

router.get('/', productController.getProduct)
  .post('/', productController.insert)
  .put('/:id', productController.update)
  .delete('/:id', productController.delete)

module.exports = router
