require('dotenv').config();
const mongoose = require('mongoose');
const uri = process.env.MONGO_URL;

const connect = async () => {
  try {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('connected to mongodb');
  } catch (error) {
    console.error(error);
  }
};
module.exports = { connect };
