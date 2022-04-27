let products = [
  {
    id: 1,
    name: 'baju',
    price: 1000,
    stock: 20
  }
]

const productController = {
  insert: (req, res, next) => {
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
  },

  delete: (req, res, next) => {
    const id = req.params.id
    products = products.filter((item) => item.id != id)
    res.json({
      message: 'data berhasil dihapus id = ' + id
    })
  },

  update: (req, res, next) => {
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
  },

  getProduct: (req, res, next) => {
    res.json({
      data: products
    })
  }
}

module.exports = productController
