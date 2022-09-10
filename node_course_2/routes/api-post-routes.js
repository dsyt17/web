const express = require("express");
const Post = require("../models/postModel");
const {
  getPost,
  deletePost,
  editPost,
  getPosts,
  addPost,
} = require("../controllers/api-post-controller");

const router = express.Router();

//all posts
router.get("/api/posts", getPosts);
// add new post
router.post("/api/post", addPost);
// get by id post
router.get("/api/posts/:id", getPost);
// del by id post
router.delete("/api/posts/:id", deletePost);
//update by id
router.put("/api/edit/:id", editPost);

module.exports = router;
