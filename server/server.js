const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');
const port = process.env.PORT || 6666;

const DB = process.env.DATABASE_LOCAL;

mongoose.connect(DB)
.then(() => console.log('DB connection success'));



const server = app.listen(port, () => {
  console.log(`App running on Port: ${port}`);
  console.log(process.env.NODE_ENV);
});