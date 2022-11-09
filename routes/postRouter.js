const express = require('express');
const router = express.Router();
const { addPost } = require('../controllers/postController');
const upload = require('../lib/uploadImage');

router.post('/addpost', upload.single('image'), addPost);

module.exports = router;
