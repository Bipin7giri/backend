const mongoose = require('mongoose');
const postModel = require('../models/PostModel');
const { error } = require('../err/err');
const addPostDB = async (payload) => {
  try {
    const addPostDB = await postModel.create({
      content: payload.message,
      image: payload.url,
    });
    return addPostDB;
  } catch (err) {
    throw err;
  }
};
module.exports = {
  addPostDB,
};
