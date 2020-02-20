const mySqlClient = require('../models/dbs')

exports.listAllEvents = (req, res) => {
  const query = `SELECT * FROM event`
  const sqlQuery = mySqlClient.query(query, (error, results) => {
    if (error) {
      res.status(500).send(error)
    }
    res.status(200).json(results)
  })
}

exports.readEvent = (req, res) => {
  const query = `SELECT * FROM event WHERE id = ?`
  const id = req.params.eventId
  const sqlQuery = mySqlClient.query(query, [id], (error, results) => {
    console.log(results)
  if (error) {
    res.status(500).send(error)
  }
  res.status(200).json(results)
  })
}

