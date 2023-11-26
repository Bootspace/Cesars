const express = require('express');
const user = express.Router();

const userFuncs = require('../controllers/userController');

user.post('/signup', userFuncs.signUp);
user.post('/login', userFuncs.login);
user.get('/verify', userFuncs.confirmEmail);

module.exports = user;
