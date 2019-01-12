const express = require('express');
const app = express();
const productRouter = require('./routes/product');
const bodyParser = require('body-parser');
const logger = require('./middlware/logger');

/*app.use(bodyParser.urlencoded({
  extended: true
}));*/

app.use(logger);

app.use(bodyParser.json());

app.use('/products',productRouter);

app.use('/', (req, res, next) => {
  res.status(200);
  res.json({'message': 'Hello'});
});

app.use((req, res) => {
  res.status(404).json({'message': 'Page Not Found!'});
});

module.exports = app;
