const express = require('express');
const Product = require('../models/Product');
const { cloudUpload } = require('../utils/cloudinary');
const { logger, deleteFile } = require('../utils/generateToken');
const APIFeatures = require('../utils/apiFilter');


exports.createProduct = async(req, res) => {
  try {
    const product = await Product.create(req.body);
    
    return logger(201, product, 'success', res);
    
  } catch (error) {
    return logger(500, error, 'failed', res);
  }
}

exports.uploadPhotos = async(req, res) => {
  const imageUrls = [];
  
  try {
    const product = await Product.findById(req.params.id);
    if(!product) {
      return logger(404, 'product not found', 'failed', res);
    }

    // Iterate through files and upload each one
    for(const file of req.files) {
      const imageUrl = await cloudUpload(file.path);
      imageUrls.push(imageUrl);
      product.photoUrl.push(imageUrl);
      deleteFile(file.path);
    }
    await product.save();
    return logger(200,'photos uploaded', 'success', res);

  } catch (error) {
    return logger(500, error, 'failed', res);
  }

};

exports.getAllProducts = async(req, res) => {
  let filter = {};
  if()
}