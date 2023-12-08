const express = require('express');
const product = express.Router();
const productFuncs = require('../controllers/productController');
const {uploads} = require('../utils/multer');
const { protect, restrictTo } = require('../controllers/userController');

product.get('/', productFuncs.getAllProducts);
product.get('/:id', productFuncs.findProduct);

product.use(protect,restrictTo("admin"));

product.post('/create', productFuncs.createProduct);
product.patch('/uploadPhotos/:id', uploads.array('images'), productFuncs.uploadPhotos);
product.patch('/:id', productFuncs.updateProduct);
product.delete('/:id', productFuncs.deleteProduct);

module.exports= product;