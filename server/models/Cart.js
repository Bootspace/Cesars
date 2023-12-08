const mongoose = require('mongoose');
const User = require('./User');
const Product = require('./Product');

const CartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true
  },

  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Product,
        required: true
      },

      quantity: {
        type: Number,
        required: true,
        default: 1
      }
    }
  ],
},
{ timestamps: true }
);

const Cart = mongoose.model('cart', CartSchema);

module.exports = Cart;