const { addUser } = require('../queries/addUser');
const { error } = require('../err/err');
const userModel = require('../models/UserModel');
const bcrypt = require('bcrypt');
const generateAccessToken = require('../lib/generateAccessToken');
const register = async (req, res) => {
  try {
    const { email, user_name } = req.body;
    const userNameDB = await userModel.find({
      user_name: user_name,
    });
    if (userNameDB.length > 0) {
      res.json({
        message: error.userNameAlradyExist,
      });
    } else {
      const emailDB = await userModel.find({
        email: email,
      });
      if (emailDB.length > 0) {
        res.json({
          message: error.emailAlreadyExist,
        });
      } else {
        const result = await addUser(req.body);
        if (result) {
          res.json({
            message: 'added to db',
            status: 201,
          });
        }
      }
    }
  } catch (err) {
    res.json({
      err,
    });
    throw err;
  }
};

const login = async (req, res) => {
  try {
    const { user_name, password } = req.body;

    const userNameDB = await userModel.find({
      user_name: user_name,
    });
    if (userNameDB.length > 0) {
      bcrypt.compare(password, userNameDB[0]?.password, function (err, status) {
        if (status === true) {
          const token = generateAccessToken(user_name);
          res.json({
            message: 'login success',
            status: 202,
            token: token,
          });
        } else {
          res.json({
            message: error.invalidPassword,
            status: 401,
          });
        }
      });
    } else {
      res.json({
        message: error.userNameNotFound,
        status: 404,
      });
    }
  } catch (err) {
    throw err;
  }
};

module.exports = {
  register,
  login,
};
