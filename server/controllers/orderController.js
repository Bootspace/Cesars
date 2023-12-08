const express = require('express');
const Order = require('../models/Order');
const User = require('../models/User');
const Product = require('../models/Product');
const { logger } = require('../utils/generateToken');

exports.createOrder = async (req, res) => {
  try {

    req.user = req.body.user;
    const order = await Order.create(req.body);

    return logger(201, order, 'success', res);
    
  } catch (error) {
    return logger(500, error, 'failed', res);
  }
}
