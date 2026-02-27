const express = require('express');
const {
  getAllPosts,
  createPost
} = require('../controllers/posts.controllers');

const router = express.Router();

router.get('/c', getAllPosts);
router.post('/v', createPost);

module.exports = router;