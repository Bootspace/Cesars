require ('dotenv').config();

const express = require('express');
const promisify = require('util').promisify;
const User = require('../models/User');
const { generateToken , createSendToken, logger }= require('../utils/generateToken');
const sendEmail = require('../utils/email');
const jwt = require('jsonwebtoken');

exports.signUp = async (req, res) => {
  try {
    const { name, email, phone, password, passwordConfirm } = req.body;

    // Check if password and passwordConfirm match
    if (password !== passwordConfirm) {
      logger(400, 'Passwords do not match', 'failed', res);
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      logger(401, 'user already exists', 'failed', res);
    }

    const user = await User.create({
      name,
      email,
      phone,
      password,
      passwordConfirm,
      token: generateToken({ email }, '1h'),
    });

    const options = {
      email: user.email,
      name: user.name,
      token: user.token,
      subject: 'Email Verification from Cesar Shop'
    };

    const mail = await sendEmail(options);

    logger(201, user, 'created', res);

  } catch (error) {
    logger(500, error.message, 'failed', res);
  }
};

exports.confirmEmail = async (req, res) => {
  const token = req.query.token;
  console.log('This is the token: ', token);
  try {
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    const user = await User.findOne({ 
      email: decoded.payload.email  
    });

    // Checking if the token is still valid
    if(decoded.exp * 1000 < Date.now() || !user){
      return logger(401, 'Token is expired or user does not exist', 'failed', res);
    };

    const updatedResult = await User.findOneAndUpdate(
      { email: decoded.payload.email },
      { $set: { token: '', isVerified: true } },
      { new: true, runValidators: true }
    );

    if (!updatedResult) {
      return logger(404, 'User not found', 'failed', res)
    }

    return logger(200, 'Email verified', 'success', res);

  } catch (error) {
    logger(500, error.message, 'failed', res);
  }
}

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if(!email || !password){
      logger(400, 'Please provide an email and password', 'failed', res)
    };

    // Chedk if user exists and password is correct
    const user = await User.findOne({ email }).select('+password');

    if(!user || !(await user.confirmPassword(password, user.password))) {
      return logger(401, 'Incorrect email or password', 'failed', res);
    };

    // If everything checks out
    createSendToken(user, 200, res);
    
  } catch (error) {
    logger(500, error, 'failed', res);
  }
};