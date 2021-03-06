const mySqlClient = require('../models/dbs')

exports.listAllGames = (req, res) => {
  const query = `SELECT * FROM jeu`
  const sqlQuery = mySqlClient.query(query, (error, results) => {
    if (error) {
      res.status(500).send(error)
    }
    res.status(200).json(results)
  })
}

exports.readGame = (req, res) => {
  const query = `SELECT * FROM jeu WHERE id = ?`
  const id = req.params.gameId
  const sqlQuery = mySqlClient.query(query, [id], (error, results) => {
    console.log(results)
  if (error) {
    res.status(500).send(error)
  }
  res.status(200).json(results)
  })
}
