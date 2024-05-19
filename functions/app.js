const express = require("express");
const serverless = require("serverless-http");
const app = express();
const path = require('path');

// Servindo a pasta design_layout como estática
app.use('/', express.static(path.join(__dirname, '..', 'design_layout')));

exports.handler = serverless(app);