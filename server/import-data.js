require('dotenv').config();
const fs = require('fs');
const mongoose = require('mongoose');

const Product = require('./models/Product');

const DB = process.env.DATABASE_LOCAL;

mongoose.connect(DB)
.then(() => console.log('DB connection success'));

// Read JSON file
const products = JSON.parse(fs.readFileSync(`${__dirname}/utils/data.json`));

// import Data
const importData = async () => {
  try {
    await Product.create(products);
    console.log('Data successfully created');
    process.exit();
  } catch(err){
    console.log(err);
  }
};

// Delete Data
const deleteData = async () => {
  try {
    await Product.deleteMany();
    console.log('Data successfully deleted');
    process.exit();
  } catch(err){
    console.log(err);
  }
};

if(process.argv[2] === '--import') {
  importData()
} else if(process.argv[2] === '--delete'){
  deleteData()  
};




