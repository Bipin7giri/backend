const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    user_name: {
      type: String,

      required: [true, 'Name field is required .'],
    },
    address: {
      type: String,
      required: [true, 'Address field is required .'],
    },
    phone_number: {
      type: String,
      required: [true, 'Phone number field is required .'],
    },
    email: {
      type: String,
      required: [true, 'Email filed is required .'],
    },
    password: {
      type: String,
      required: [true, 'Password filed is required .'],
    },
    posts: [{ type: mongoose.Types.ObjectId, ref: 'posts' }],
  },
  {
    timestamps: true,
  }
);
const userModel = mongoose.model('users', userSchema);
module.exports = userModel;
