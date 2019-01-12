const productController = require('../controllers/product');
const express = require('express');
const router = express.Router();

router.get('/', productController.findAllProducts);

router.post('/', productController.createProduct);

router.get('/:productId', productController.findProduct);

module.exports = router;