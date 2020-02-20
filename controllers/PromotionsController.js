const mySqlClient = require('../models/dbs')

exports.listAllPromotions = (req, res) => {
  const query = `SELECT * FROM promotion`
  const sqlQuery = mySqlClient.query(query, (error, results) => {
    if (error) {
      res.status(500).send(error)
    }
    res.status(200).json(results)
  })
}

exports.readPromotion = (req, res) => {
  const query = `SELECT * FROM promotion WHERE id = ?`
  const id = req.params.promotionId
  const sqlQuery = mySqlClient.query(query, [id], (error, results) => {
    console.log(results)
  if (error) {
    res.status(500).send(error)
  }
  res.status(200).json(results)
  })
}
