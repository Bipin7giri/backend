const bcrypt = require('bcrypt');

const hashPassword = (password) => {
  const salt = 10;
  const hash = bcrypt.hash(password.toString(), salt);
  return hash;
};

const checkPassword = (loggedPassword, reqPassword) => {
  const access = bcrypt.compare(reqPassword, loggedPassword);
  return access;
};

const bcryptPassword = {
  hashPassword,
  checkPassword,
};
module.exports = bcryptPassword;
