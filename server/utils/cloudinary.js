require('dotenv').config();
const {logger} = require('./generateToken');
const {res} = require('express');

const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_APIKEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

exports.cloudUpload = async (file) => {
  try {
    const result = await cloudinary.uploader.upload(file, {
      folder: 'cesars'
    });

    console.log(result);
    const imageUrl = {
      secureUrl: result.secure_url,
      publicId: result.public_id
    }

    return imageUrl;
    
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

exports.cloudDelete = async (files) => {
  try {
    for (const file of files) {
      await cloudinary.uploader.destroy(file)
    }

    console.log('Image deleted');
    
  } catch (error) {
    return res.status(500).json(error.message);
  }
}