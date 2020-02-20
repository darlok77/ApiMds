const mySqlClient = require('../models/dbs')

exports.listAllGame = (req, res) => {
  const query = `SELECT * FROM game`
  const sqlQuery = mySqlClient.query(query, (error, results) => {
    if (error) {
      res.status(500).send(error)
    }
    res.status(200).json(results)
  })
}

exports.readUser = (req, res) => {
  const query = `SELECT * FROM game WHERE id = ?`
  const id = req.params.gameId
  const sqlQuery = mySqlClient.query(query, [id], (error, results) => {
    console.log(results)
  if (error) {
    res.status(500).send(error)
  }
  res.status(200).json(results)
  })
}
