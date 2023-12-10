const express = require('express');
const cart = express.Router();
const { protect, restrictTo } = require('../controllers/userController');
const cartFuncs = require('../controllers/cartController');

cart.get('/add/:id', protect, cartFuncs.AddToCart);
cart.get('/cart', protect, cartFuncs.getCart);
cart.patch('/cart/:id', protect, cartFuncs.updatecart);

module.exports = cart;