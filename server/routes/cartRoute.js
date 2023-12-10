const express = require('express');
const cart = express.Router();
const { protect, restrictTo } = require('../controllers/userController');
const cartFuncs = require('../controllers/cartController');

cart.get('/add/:id', protect, cartFuncs.AddToCart);

module.exports = cart;