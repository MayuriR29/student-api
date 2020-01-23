var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'studentDB'
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected to mysql")
})

modeule.exports = connection;
