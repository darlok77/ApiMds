const mySqlClient = require('../models/dbs')

exports.listAllUsersScore = (req, res) => {
  const query = `SELECT firstname, lastname, score FROM user, score WHERE user.id = score.id_user`
  const sqlQuery = mySqlClient.query(query, (error, results) => {
    if (error) {
      res.status(500).send(error)
    }
    res.status(200).json(results)
  })
}

exports.readUser = (req, res) => {
  const query = `SELECT firstname, lastname, score FROM user, score WHERE user.id = score.id_user and user.id= ?`
  const id = req.params.userId
  const sqlQuery = mySqlClient.query(query, [id], (error, results) => {
    console.log(results)
  if (error) {
    res.status(500).send(error)
  }
  res.status(200).json(results)
  })
}

exports.updateUser = (req, res) => {
  let query = `UPDATE score SET `
  const payload = req.body
  const id = req.params.userId

  Object.entries(payload).forEach((value, index) => {
    if (Object.entries(payload).length === index + 1) {
        query += `${value[0]} = '${value[1]}'`
    } else {
        query += `${value[0]} = '${value[1]}',`
    }
  })

  query += ' WHERE id_user = ?'

  const sqlQuery = mySqlClient.query(query, [id], (error, results) => {
  if (error) {
    res.status(500).send(error)
  }
  res.status(200).json(results)
  })
}