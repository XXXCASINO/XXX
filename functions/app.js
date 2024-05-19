/* const express = require("express");
const serverless = require("serverless-http");
const app = express();
const path = require('path')

app.get('/', (req, res) => {
    res.send('Hello from the root!');
});

module.exports.handler = serverless(app); */

const express = require("express");
const serverless = require("serverless-http");
const app = express();
const db = require('./database'); // Import your database module

app.get('/', (req, res) => {
    db.getData('SELECT * FROM databasexxx.users', (err, results) => {
        if (err) {
            res.status(500).send('Database error');
            return;
        }
        res.send(results);
    });
});

module.exports.handler = serverless(app);