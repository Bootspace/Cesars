require('dotenv').config();
const fs = require('fs');

const jwt = require('jsonwebtoken');
const JWTSECRET = process.env.JWT_SECRET;
const JWTEXPIRES = process.env.JWT_EXPIRESIN;

exports.logger = (statusCode, message, status, res) => {
  console.log(message);
  res.status(statusCode).json({
   status: status,
   message: message
  })
};

exports.generateToken = (payload, time) => {
  return jwt.sign({payload}, JWTSECRET, {
    expiresIn: time
  })
};

exports.signToken = id => {
  return jwt.sign({id}, JWTSECRET, {
    expiresIn: JWTEXPIRES
  })
};

exports.createSendToken = (user, statusCode, res) => {
  const token = this.signToken(user._id);

  const cookieOptions = {
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 *60 * 60 * 1000),
    httpOnly: true
  };

  if(process.env.NODE_ENV === 'production') {
    cookieOptions.secure = true;
  }

  // Define the cookie object
  res.cookie('jwt', token, cookieOptions);

  // Remove password from the output
  user.password = undefined;

  res.status(statusCode).json({
    status:'success',
    token: token,
    data: {
      user: user
    }
  })
};

exports.filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach(el => {
    if(allowedFields.includes(el)) newObj[el] = obj[el]
  });

  return newObj;
};

exports.deleteFile = (filePath) => {
  fs.unlink(filePath, (err) => {
    if(err){
      return console.error(`Error deleting file ${filePath}: ${err.message}`);
    }
    else {
      console.log(`File ${filePath} deleted succesfully.`);
    }
  })
};
