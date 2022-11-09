const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const postSchema = new Schema(
  {
    content: {
      type: String,
      required: [true, 'content field is required .'],
    },
    image: {
      type: String,
      required: [true, 'Image field is required .'],
    },
    facebook_post_id: {
      type: String,
    },
    posted: {
      type: Boolean,
      default: false,
      required: [true],
    },
    users: [{ type: mongoose.Types.ObjectId, ref: 'users' }],
  },
  {
    timestamps: true,
  }
);
const postModel = mongoose.model('posts', postSchema);
module.exports = postModel;
