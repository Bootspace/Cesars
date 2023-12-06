const express = require('express');
const product = express.Router();
const productFuncs = require('../controllers/productController');
const {uploads} = require('../utils/multer');

product.post('/create', productFuncs.createProduct);
product.patch('/uploadPhotos/:id', uploads.array('images'), productFuncs.uploadPhotos);
product.get('/', productFuncs.getAllProducts);
product.get('/:id', productFuncs.findProduct);
product.patch('/:id', productFuncs.updateProduct);

module.exports= product;