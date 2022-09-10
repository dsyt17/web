const express = require("express");
const Post = require("../models/postModel");
const createPath = require("../helpers/create-path");
const {
  getPost,
  deletePost,
  getEditPost,
  editPost,
  getPosts,
  getAddPost,
  addPost,
} = require("../controllers/post-controller");

const router = express.Router();

router.get("/add-post", getAddPost);

router.get("/posts", getPosts);

router.get("/posts/:id", getPost);

router.delete("/posts/:id", deletePost);

router.post("/add-post", addPost);

router.get("/edit/:id", getEditPost);

router.put("/edit/:id", editPost);

module.exports = router;
