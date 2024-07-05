const mysql = require('mysql2');
const config = require('./config');

const connection = mysql.createConnection({
  host: config.db.host,
  user: config.db.user,
  password: config.db.pass,
  database: config.db.db
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database');
});

exports.insertUser = (user, callback) => {
  const query = 'INSERT INTO users (name, email, age, pancard) VALUES (?, ?, ?, ?)';
  connection.query(query, [user.name, user.email, user.age, user.pancard], callback);
};
