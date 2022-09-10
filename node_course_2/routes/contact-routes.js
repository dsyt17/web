const express = require("express");
const Post = require("../models/postModel");
const router = express.Router();
const createPath = require("../helpers/create-path");

router.get("/contacts", (req, res) => {
  const title = "Contscts";
  const contacts = [
    { name: "YouTube", link: "https://www.youtube.com/" },
    { name: "Twitter", link: "https://www.youtube.com/" },
    { name: "GitHub", link: "https://www.youtube.com/" },
    { name: "Vk", link: "https://www.youtube.com/" },
    { name: "Telegram", link: "https://www.youtube.com/" },
  ];
  res.render(createPath("contacts"), { contacts, title });
});

module.exports = router;
