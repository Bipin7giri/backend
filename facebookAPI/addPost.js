const axios = require('axios');
require('dotenv').config();
const postModel = require('../models/PostModel');
const addPostToFacebook = async (url, message, post_id) => {
  axios
    .post(
      `https://graph.facebook.com/113012284949454/photos`,
      {},
      {
        params: {
          url: url,
          message: message,
          access_token:
            'EAAHJnZB9NpYoBAEhO7XK96yHWd9ZAvSIP5cZABeeDXQeEBTZALD2bdPL9gLS5GgjywyKUgWgY8qRUs72msCcngiZCOYi4WqhWeVWjzgQw0wOVUZBdJnzdF8dHGfj4ZC2Xi4jpKXcDwisrmEexjlxxwMU4xNtS4LSJW1DmOUl29UGZBaXQdl2jfWqBZAdZCFPEJtBhkoZB2jil7vSAZDZD',
        },
      }
    )
    .then((res) => {
      postModel
        .findByIdAndUpdate(
          {
            _id: post_id,
          },
          {
            facebook_post_id: res.data.post_id,
          },
          {
            new: true,
          }
        )
        .then(function (doc) {
          console.log(doc);
        });
    });
};

module.exports = { addPostToFacebook };
