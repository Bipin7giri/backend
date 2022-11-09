const jwt = require('jsonwebtoken');
const checkTokenApi = async (req, res, next) => {
  try {
    let token = req.header('x-auth-token');
    if (!token) {
      return next({
        msg: 'Unauthorized ',
        fields: {},
        status: 401,
      });
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        return next({
          msg: 'Invalid Token',
          fields: {},
          status: 401,
        });
      } else if (user) {
        next();
      }
    });
  } catch (err) {
    next({
      msg: 'Invalid Token',
      fields: {},
      status: 401,
    });
    next(serverError);
  }
};
module.exports = {
  checkTokenApi,
};
