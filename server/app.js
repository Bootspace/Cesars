const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const morgan = require('morgan');
const xss = require('xss-clean');
const app = express();
const userRoutes = require('./routes/userRoute');
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoute");
const cartRoutes = require("./routes/cartRoute");

// Set security HTTP headers
app.use(helmet());

// Development Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
};

// Data sanitization against NOSQL query Injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Server started...');
});

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/orders', orderRoutes);
app.use('/api/v1/carts', cartRoutes);

app.all('*', (req, res, next) => {
  console.log(`Can't find ${req.originalUrl} on this server!`);
});

module.exports = app;