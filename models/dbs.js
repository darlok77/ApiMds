const mysql = require('mysql')

const mySqlClient = mysql.createConnection({
  host     : "localhost",
  user     : "slam",
  password : "slam",
  database : "hackathon"
});

module.exports = mySqlClient