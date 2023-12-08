require ('dotenv').config();
const crypto = require('crypto');

const express = require('express');
const promisify = require('util').promisify;
const User = require('../models/User');
const { generateToken , createSendToken, logger, filterObj }= require('../utils/generateToken');
const sendEmail = require('../utils/email');
const jwt = require('jsonwebtoken');

exports.signUp = async (req, res) => {
  try {
    const { name, email, phone, password, passwordConfirm } = req.body;

    // Check if password and passwordConfirm match
    if (password !== passwordConfirm) {
      return logger(400, 'Passwords do not match', 'failed', res);
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return logger(401, 'user already exists', 'failed', res);
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
      subject: 'Email Verification from Cesar Shop',
      title: 'Email Confirmation',
      message: 'If you did not sign up for our service, you can safely ignore this email.',
      confirmationLink: `http://localhost:4400/api/v1/users/verify?token=${user.token}`
    };

    const mail = await sendEmail(options);

    return logger(201, user, 'created', res);

  } catch (error) {
    return logger(500, error.message, 'failed', res);
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

exports.forgotPassword = async(req, res) => {
  // Get user based on Posted Email
  const email = req.body.email;
  const user = await User.findOne({ email });
  if(!user) {
    logger(404, 'user not found', 'failed', res);
  }

  const options = {
    email: user.email,
    name: user.name,
    token:'',
    subject: 'Password reset from Cesar Shop',
    title: 'Forgot Password',
    message: 'If you did not request for a password reset, you can safely ignore this email.'
  };

  // Generate Random Reset Token
  const resetToken = await user.createPasswordResetToken();

  await user.save({ validateBeforeSave: false })

  options.confirmationLink= `http://localhost:4400/api/v1/users/resetPassword/:token=${resetToken}`

  try {
    await sendEmail(options);
    logger(200, 'token sent to the mail', 'created', res);
  } catch (error) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false })

    logger(500, 'error sending email, try again', 'failed', res);
  }
};

exports.resetPassword = async (req, res) => {
  const hashedToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');

  // Get user based on the token
  try {
    const user = await User.findOne({ passwordResetToken: hashedToken });
    if(!user){
     return logger(404, 'token expired', 'failed', res);
    }

    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
    
    createSendToken(user, 200, res);

  } catch (error) {
    logger(500, error, 'failed', res);
  }
};

exports.protect = async (req, res, next) => {
  let token;
  // Getting the token
  if(req.headers.authorization && 
    req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }
    if(!token) {
      return logger(401,'You are not logged in! Please log in to get access', 'failed', res)
    };

    // Verifying the Token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // Check if user still exists
    const currentUser = await User.findById(decoded.id);
    if(!currentUser){
      return logger(401, 'This user does not exist', 'failed', res);
    };

    // Check if user changed password after jwt was issued
    if(currentUser.changedPasswordAfter(decoded.iat)) {
      return logger(401, 'User recently changed password, login again', 'failed', res);
    }

    // Grant user access
    req.user = currentUser;
    next();
};

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if(!roles.includes(req.user.role)) {
      return logger(403,'You do not have permission to perform this action', 'failed', res);
    };

    next();
  }
};

exports.changePassword = async (req, res, next) => {
  // 1) Get user from collection
  const user = await User.findById(req.user._id).select('+password');

  // 2) Check if Posted current Password is correct
  if(!(user.confirmPassword(req.body.currentPassword, user.password))) {
    return
    logger(401, 'Your current password is wrong.', 'failed', res);
  }


  // 3) If so, update Password
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();

  // 4) Login User
  createSendToken(user, 200, res)
};



exports.updateMe = async(req, res) => {
  // Error if user posts password data for update
  if(req.body.password || req.body.passwordConfirm) {
    return logger(400, 'This route is not for password updates.', 'failed', res)};

  // Filter out unwanted fieldnames that are not allowed to be updated
  const newBody = filterObj(req.body, "name", "email");
  
  // Update User Document
  const updatedUser = await User.findByIdAndUpdate(req.user.id, newBody, {
    new: true,
    runValidators: true
  });

  return logger(200, updatedUser, 'success', res);
  }