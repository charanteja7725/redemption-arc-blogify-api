const { successResponse } = require('../utils/apiResponse');

const getAllPosts = (req, res) => {
  return res.status(200).json(
    successResponse("Posts fetched successfully", [])
  );
};

const createPost = (req, res) => {
  return res.status(201).json(
    successResponse("Post created successfully", req.body)
  );
};

module.exports = {
  getAllPosts,
  createPost
};