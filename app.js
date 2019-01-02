const express = require('express');
const mongoose = require('./helpers/mongo-connect');
const app = express();

app.use('/', (req, res) => {
  res.status(200);
  res.json({'message': 'Hello'});
});

module.exports = app;
