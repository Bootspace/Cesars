const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,'Please tell us your name']
  },

  email: {
    type: String,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },

  phone: {
    type: String,
  },

  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false
  },

  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      // This only works on CREATE and SAVE!!!
      validator: function(el) {
        return el === this.password;
      },
      message: 'Passwords are not the same!'
    }
  },

  isVerified: {
    type: Boolean,
    default: false
  },

  token: String
});

userSchema.pre('save', async function(next) {
  if(!this.isModified('password')) return next();

  // Hash the password
  this.password = await bcrypt.hash(this.password, 10);
  next();

  // Delete PasswordConfirm field
  this.passwordConfirm = undefined;
});

// Instance methods
// Available on all documents in this collection
userSchema.methods.confirmPassword = async function
(enteredPassword, dbPassword) {
  return await bcrypt.compare(enteredPassword, dbPassword);
};

const User = mongoose.model('User', userSchema);

module.exports = User;