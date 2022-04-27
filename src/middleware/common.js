const validate = (req, res, next) => {
  const stock = req.body.stock

  if (stock < 1) {
    return res.json({
      mesagge: 'stock tidak boleh kurang 1'
    })
  }
  next()
}

const middle = (res, req, next) => {
  console.log('print ini dulu')
  next()
}

module.exports = {
  validate,
  middle
}
