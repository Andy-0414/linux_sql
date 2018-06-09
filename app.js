const express = require('express');
const app = express();

var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1111',
    database: 'test'
});

con.connect();
app.listen(3020)
app.get('/in/:data', (req, res) => {
    var par = req.params.data
    var sql = 'INSERT INTO list (text) VALUES (?)'
    con.query(sql,par, (err, result, fields) => {
        res.send(par);
    })
})
app.get('/out', (req, res) => {
    var sql = 'SELECT id,text FROM list'
    con.query(sql, (err, result, fields) => {
        res.send(result);
    })
})