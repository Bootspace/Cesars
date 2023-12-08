const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the name of this product"]
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

  photoUrl: [
    {
      secureUrl: {
        type: String,
      },
      publicId: {
        type: String,
      },
    },
  ],

  stars: {
    type: Number,
    max: 5
  },

  price: {
    type: Number,
    required: [true, "Please enter a price for this product"],
    default: 1
  } 
},
{ timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;