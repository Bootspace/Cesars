const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the name of this product"]
  },

  size: {
    type: String,
    enum: [ "xs", "s", "m", "l","xl"],
    default: "m"
  },  

  category: {
    type: String,
    enum: [ "phones", "computers", "smartwatch", "camera","headset", "gaming"],
    required: [true, "Please select a category for this product"]
  },

  description: {
    type: String,
    required: [true, "Please enter a description for this product"]
  },

  photoUrl: [{
    type: String
  }],

  stars: {
    type: Number,
    max: 5
  },

  price: {
    type: Number,
    required: [true, "Please enter a price for this product"],
    default: 1
  } 
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;