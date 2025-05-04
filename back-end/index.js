const express = require('express');
const mysql = require('mysql2');
const app = express();

const port = 5000;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

app.get('/', (req, res) => {
  db.query('SELECT NOW() as now', (err, results) => {
    if (err) throw err;
    res.send(`Server Time: ${results[0].now}`);
  });
});

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});

