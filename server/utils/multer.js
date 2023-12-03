const multer = require('multer');
const express = require('express');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', 'public'));
  },

  filename: function(req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname)
  }
});

const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png' && ext !== '.mp4') {
      return cb({ message: 'Unsupported File format'}, false);
  }
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'video/mp4' || file.mimetype === 'image.jpg') {
    cb(null, true)
  } 

  else {
    // Reject File
    cb({ message: 'Unsupported File format'}, false)
  }
};

exports.uploads = multer({
  storage: storage,
  fileFilter: fileFilter
});