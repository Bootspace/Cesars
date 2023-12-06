const express = require('express');
const Product = require('../models/Product');
const { cloudUpload, cloudDelete } = require('../utils/cloudinary');
const { logger, deleteFile } = require('../utils/generateToken');
const APIFeatures = require('../utils/apiFilter');

const client  = require('../utils/redis');
client.connect();


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


exports.getAllProducts = async (req, res) => {
  let filter = {};

  const features = new APIFeatures(Product.find(filter), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  try {
    const products = await features.query;

    // SEND RESPONSE
    return res.status(200).json({
      status: 'success',
      results: products.length,
      data: {
        data: products,
      },
    });

  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    });
  }
};

exports.findProduct = async(req, res) => {
  const { id } = req.params;

  try {
    const cachedData = await client.get(id);

    if(cachedData) {
      return res.status(200).json({
        status: 'success',
        isCached: true,
        message: JSON.parse(cachedData)
      })
    }
    const product = await Product.findById(id);

    if(!product) {
      return logger(404, 'product not found', 'failed', res);
    }
    client.set(id, JSON.stringify(product));
    return logger(200, product, 'success', res);

  } catch (error) {
    return logger(500, error, 'failed', res); 
  }
}

exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    if(!req.body || Object.keys(req.body).length === 0) {
      return logger(400, 'Please enter a body to be updated', 'failed', res );
    };

    const update = await Product.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true
    });
  
    if(!update) {
      return logger(404, 'Product not found', 'failed', res);
    }
  
    return logger(200, 'Product updated', 'success', res);
  } catch (error) {
    return logger(500, error, 'failed', res);
  }
};


exports.deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);


  try {
    if(!product) {
      return logger(404, 'Product not found', 'failed', res);
    };

    const files = product.photoUrl;

    if(files.length > 0) {
      await cloudDelete(files);
      await product.deleteOne();
      return logger(203, 'Product deleted', 'success', res);
    }
    await product.deleteOne();
    return logger(203, 'Product deleted', 'success', res);
  } catch (error) {
    return logger(500, error, 'failed', res);
  }
}