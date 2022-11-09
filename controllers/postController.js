const axios = require('axios');
require('dotenv').config();
const { addPostDB } = require('../queries/addPost');
const { addPostToFacebook } = require('../facebookAPI/addPost');
const addPost = async (req, res) => {
  try {
    const { message } = req.body;

    const url = process.env.BORE_URL + req.file.filename;

    const result = await addPostDB({ message, url });

    if (result) {
      addPostToFacebook(url, message, result._id);
    }
    res.send('ok');
  } catch (err) {
    throw err;
  }
};

module.exports = { addPost };
