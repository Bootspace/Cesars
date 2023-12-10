const express = require('express');
const {logger} = require('../utils/generateToken');
const client = require('../utils/redis');
const Cart = require('../models/Cart');
const Product = require('../models/Product');


exports.AddToCart = async (req, res) => {
  const user = req.user;
  const productId = req.params.id;

  try {
    // Get the correct cart for the user from the DB
    let userCart = await Cart.findOne({ user });

    // If there is no cart for the user in the DB, create a new one
    if (!userCart) {
      userCart = new Cart({ user, items: [] });
    }

    // Ensure that userCart.items is an array
    if (!Array.isArray(userCart.items)) {
      userCart.items = [];
    }

    // Add the product to the cart
    const product = await Product.findById(productId);
    const itemIndex = userCart.items.findIndex((p) => p.productId == productId);

    if (itemIndex > -1) {
      // If product exists in the cart, update the quantity
      userCart.items[itemIndex].quantity++;
      userCart.items[itemIndex].price = userCart.items[itemIndex].quantity * product.price;
      userCart.totalQty++;
      userCart.totalCost += product.price;
    } else {
      // If product does not exist in cart, add it
      userCart.items.push({
        productId: productId,
        quantity: 1,
        price: product.price,
        name: product.name,
      });

      userCart.totalQty++;
      userCart.totalCost += product.price;
    }

    // Save the updated or new cart in the DB
    await userCart.save();

    // Return a success response
    return logger(200, 'Item added to cart', 'success', res);
  } catch (error) {
    // Return an error response
    return logger(500, error, 'failed', res);
  }
};

// Get User's Cart
exports.getCart = async(req, res) => {
  const user = req.user;
  try {
    let cart = await Cart.findOne({ user });
    if(!cart) {
      return logger(404, 'no cart for this user', 'failed', res);
    }

    return logger(200, cart, 'success', res);

  } catch (error) {
    return logger(500, error, 'failed', res);
  }
};

// update User's cart
exports.updatecart = async (req, res) => {
  const user = req.user;
  try {
    const updatedCart = await Cart.findById(req.params.id, 
      { $set: req.body },
      { new: true }
    );

    return logger(200, updatedCart, 'success', res);
  } catch (error) {
    logger(500, error, 'failed', res);
  }
};

exports.checkout = async ();