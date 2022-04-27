const CategoryController = require('../controller/category')
const express = require('express')
const Router = express.Router()

Router.get('/', CategoryController.getCategory)
  .post('/', CategoryController.insert)
  .put('/:id', CategoryController.update)
  .delete('/:id', CategoryController.deleteCategory)

module.exports = Router
