const mysql = require('mysql2');

// Create a database connection
const connection = mysql.createConnection({
  host: 'localhost',  // Database host
  user: 'root',       // Database user
  password: '',       // Database password
  database: 'student_db', // Database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
    return;
  }
  console.log('Connected to the MySQL database.');
});

module.exports = connection;
