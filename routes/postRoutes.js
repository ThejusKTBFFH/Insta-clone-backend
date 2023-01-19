const express = require('express');
const {createPost, getPost} = require('../controllers/postController.js')

const router = express.Router();

router.post("/addpost",createPost)

router.get("/", getPost);

module.exports = router;