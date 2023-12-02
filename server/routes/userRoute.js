const express = require('express');
const user = express.Router();

const userFuncs = require('../controllers/userController');

user.post('/signup', userFuncs.signUp);
user.post('/login', userFuncs.login);
user.get('/verify', userFuncs.confirmEmail);
user.post('/forgotPassword', userFuncs.forgotPassword);
user.put('/resetPassword/:token', userFuncs.resetPassword);

user.use(userFuncs.protect);

user.patch('/changePassword', userFuncs.changePassword);
module.exports = user;
