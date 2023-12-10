const express = require('express');
const Order = require('../models/Order');
const User = require('../models/User');
const Product = require('../models/Product');
const { logger } = require('../utils/generateToken');

const client  = require('../utils/redis');

exports.createOrder = async (req, res) => {
  try {
    const user = req.user;
    let totalAmount = 0;
    for(const product of req.body.products) {
      let cachedProduct = await client.get(product.productId);

      if(cachedProduct) {
        console.log(JSON.parse(cachedProduct));
        cachedProduct = JSON.parse(cachedProduct);
        const amount =  product.quantity * cachedProduct.price;
        totalAmount += amount
      }
      else {
        const savedProduct = await Product.findById(product.productId);
        console.log(savedProduct);
        const amount =  product.quantity * savedProduct.price;
        totalAmount += amount
      }      
    };
    const order = await Order.create({ user, amount: totalAmount, ...req.body });
  
    return logger(201, order, 'success', res);
    
  } catch (error) {
    return logger(500, error, 'failed', res);
  }
};

