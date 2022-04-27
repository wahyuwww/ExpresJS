// const res = require('express/lib/response')
// const {json} = require('express/lib/response')
const createError = require('http-errors')
const modelCategory = require('../models/category')
// const pool = require("../config/db");
const errorServ = new createError.InternalServerError()
exports.getCategory = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page || 1)
    const limit = parseInt(req.query.limit || 5)
    const offset = (page - 1) * limit

    const result = await modelCategory.select({ limit, offset })
    const { rows: [count] } = await modelCategory.countCategori()
    const totalData = parseInt(count.total)
    const totalPage = Math.ceil(totalData / limit)
    res.status(200).json({
      pagination: {
        currentPage: page,
        limit,
        totalData,
        totalPage
      },
      data: result
    })
  } catch (error) {
    console.log(error)
    // res.status(500).json({
    //   message: 'internal server error'
    // })
    next(errorServ)
  }
}

exports.insert = async (req, res, next) => {
  const { id, name } = req.body
  const data = {
    id,
    name
  }

  // modelCategory
  //   .insert(data)
  //   .then((result) => {
  //     res.status(200).json({
  //       message: "data berhasil di tambahkan",
  //       data,
  //     });
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //     res.status(500).json({
  //       message: "internal server error",
  //     });
  //   });
  try {
    await modelCategory.insert(data)
    res.status(200).json({
      message: 'data berhasil di tambahkan',
      data
    })
  } catch (error) {
    // cara 1 --> buat object dari error
    // const err = new Error('ada error id insert cateogry')
    // err.status = 500
    // next(err)

    // cara 2 --> buat object sendiri
    // next({ message: 'maaf error bro', status: 500 })

    // cara 3 --> buat object dari pekage
    next(createError(500, 'error ada di sini'))
    next(new createError.NotFound())
  }
}

exports.update = async (req, res) => {
  const id = req.params.id
  const name = req.body.name
  modelCategory
    .update({ id, name })
    .then(() => {
      res.status(200).json({
        message: 'data berhasil diupdate',
        data: req.body
      })
    })
    .catch((error) => {
      console.log(error)
      res.status(500).json({
        message: 'internal server error'
      })
    })
//   try {
//     await modelCategory.update(id,name);
//     res.status(200).json({
//         message: "data berhasil diupdate",
//         data : name
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: "internal server error",
//     });
//   }
}

// exports.update = (req, res, next)=>{
//     const id = req.params.id
//     const name = req.body.name

//     pool.query("UPDATE category SET name = $1 WHERE id= $2", [name, id], (err, result)=>{
//         if(!err){
//             res.json({
//                 message: "data berhasil diupdate",
//                 data : req.body
//             })
//         }else{
//             res.status(500).json({
//                 message: 'internal server error'
//             })
//         }
//     })
// }

exports.deleteCategory = (req, res) => {
  const id = req.params.id
  modelCategory
    .deleteCategory(id)
    .then(() => {
      res.status(200).json({
        message: 'data berhasil dihapus',
        id
      })
    })
    .catch((error) => {
      console.log(error)
      res.status(500).json({
        message: 'interval error'
      })
    })
}
