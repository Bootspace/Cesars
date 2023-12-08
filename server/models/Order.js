const mongoose = require('mongoose');
const User = require('./User');
const Product = require('./Product');

const OrderSchema = new mongoose.Schema({
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

  amount: { type: Number, required: true },
  address: { type: Object, required: true },
  status: { type: String, default: "pending" },
},
{ timestamps: true }
);

const Order = mongoose.model('order', OrderSchema);
module.exports = Order;