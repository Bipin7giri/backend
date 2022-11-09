const mongoose = require('mongoose');
const userModel = require('../models/UserModel');
const { err } = require('../err/err');
const bcrypt = require('bcrypt');
const addUser = async (paylaod) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(paylaod.password, salt);
    const addUserDB = await userModel.create({
      user_name: paylaod.user_name,
      address: paylaod.address,
      phone_number: paylaod.phone_number,
      email: paylaod.email,
      password: hashPassword,
    });

    return addUserDB;
  } catch (err) {
    throw err;
  }
};
module.exports = {
  addUser,
};
