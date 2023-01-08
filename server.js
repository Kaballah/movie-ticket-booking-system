const express = require('express');
const mysql = require('mysql');
// const bcrypt = require('bcrypt');

const app = express();

// app.listen(3000, () => console.log('Server running on port 3000...'));

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Kisakabala_010",
    database: 'movies'
});
  
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});