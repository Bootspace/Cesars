const express = require('express');
const order = express.Router();
const orderFuncs = require('../controllers/orderController');

const { protect, restrictTo } = require('../controllers/userController');

order.post('/create', protect, orderFuncs.createOrder);

module.exports = order;