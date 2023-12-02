const crypto = require('crypto');
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

  token: String,
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date
});

userSchema.pre('save', async function(next) {
  if(!this.isModified('password')) return next();

  // Hash the password
  this.password = await bcrypt.hash(this.password, 10);
  next();

  // Delete PasswordConfirm field
  this.passwordConfirm = undefined;
});

userSchema.pre('save', function(next) {
  if(this.isModified('password') || this.isNew) return next();
   
  this.passwordChangedAt = Date.now() - 1000;
  next();
})

// Instance methods
// Available on all documents in this collection
userSchema.methods.confirmPassword = async function
(enteredPassword, dbPassword) {
  return await bcrypt.compare(enteredPassword, dbPassword);
};

userSchema.methods.createPasswordResetToken = function() {
  // 1) Create a resetToken using the crypto module
  const resetToken = crypto.randomBytes(32).toString('hex');

  // 2) Hashing the resetToken created above and saving it in the database
  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');
    
    // console.log({resetToken}, this.passwordResetToken);

  // 3) Setting the resetToken expiry date

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  // 4) Returning the unhashed resetToken to the user via email
  return resetToken;
};

userSchema.methods.changedPasswordAfter = function(JWTTimestamp) {
  if(this.password.passwordChangedAt) {
    const changedTimestamp = parseInt(this.passwordChangedAt.getTime()/1000, 10);
    return JWTTimestamp < changedTimestamp
  }

  // False means not changed
  return false;
};

const User = mongoose.model('User', userSchema);

module.exports = User;