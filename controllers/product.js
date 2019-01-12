const Product = require('../models/Product');
const mongoose = require('mongoose');

module.exports.findAllProducts = function (req, res, next) {
  Product.find()
    .select('_id name ingrids')
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((err) => {
      res.status(500).json({'message': 'Something go wrong'});
    });
};

module.exports.createProduct = function (req, res, next) {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    ...req.body
  });

  product.save().then((product) => {
    res.status(201).json({
      'message': 'Product created successfully',
      'product': product
    });
  }).catch((err) => {
    res.status(500).json({'err': err});
  });
};

module.exports.findProduct = function (req, res, next) {
  const id = req.params.productId;
  Product.findById(id)
    .select('_id name ingrids')
    .then((product) => {
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({'message': 'Product does not exist'});
      }
    })
    .catch((err) => {
      res.status(500).json({err});
    })
};