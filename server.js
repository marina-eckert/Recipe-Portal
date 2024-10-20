const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'marina',
  password: 'Rucbar1!',
  database: 'mern_db'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log('Server running on http://localhost:${port}');
});
