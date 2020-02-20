const mySqlClient = require('../models/dbs')

exports.listAllUsers = (req, res) => {
  const query = `SELECT * FROM user`
  const sqlQuery = mySqlClient.query(query, (error, results) => {
    if (error) {
      res.status(500).send(error)
    }
    res.status(200).json(results)
  })
}

exports.createNewUser = (req, res) => {
  const payload = req.body
  const firstname = payload.firstname
  const lastname = payload.lastname
  const phone = payload.phone
  const mail = payload.mail
  const sub = payload.sub
  const points = payload.points

  const query = `INSERT INTO user (firstname,lastname,phone,mail,sub,points)
    VALUES (?,?,?,?,?,?)`
  const sqlQuery = mySqlClient.query(query, [firstname, lastname, phone, mail, sub, points], (error, results) => {
    if (error) {
      res.status(500).send(error)
    }
    res.status(201).json(results)
  })
}

exports.readUser = (req, res) => {
  const query = `SELECT * FROM user WHERE id = ?`
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
  let query = `UPDATE user SET `
  const payload = req.body
  const id = req.params.userId

  Object.entries(payload).forEach((value, index) => {
    if (Object.entries(payload).length === index + 1) {
        query += `${value[0]} = '${value[1]}'`
    } else {
        query += `${value[0]} = '${value[1]}',`
    }
  })

  query += ' WHERE id = ?'

  const sqlQuery = mySqlClient.query(query, [id], (error, results) => {
  if (error) {
    res.status(500).send(error)
  }
  res.status(200).json(results)
  })
}

exports.deleteUser = (req, res) => {
  const id = req.params.userId
  const query = `DELETE FROM user WHERE id = ?`

const sqlQuery = mySqlClient.query(query, [id], (error, results) => {
  if (error) {
    res.status(404).send(error)
  }
  res.status(200).json({ message: "User successfully deleted" })
  })
}
