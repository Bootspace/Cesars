const mongoose = require('mongoose');
const User = require('./User');
const Product = require('./Product');

const OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true
  },

  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
        required: true
      },

      quantity: {
        type: Number,
        required: true,
        default: 1
      },

      price: {
        type: Number,
        required: true,
        default: 0
      },

      name: {
        type: String
      }
    }
  ],

  totalCost: { type: Number, required: false },
  address: { type: Object, required: true },
  status: { type: String, default: "pending" },
  paymentId: { type: String, required: false }
},
{ timestamps: true }
);

const Order = mongoose.model('order', OrderSchema);
module.exports = Order;