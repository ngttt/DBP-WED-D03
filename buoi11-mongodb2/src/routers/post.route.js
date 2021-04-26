var express = require("express");
var router = express.Router();

const postsController = require("../controllers/posts.controller");

router.get("/", postsController.getPosts);

router.get("/:id", postsController.getPostByID);

router.post("/", postsController.postPost);

router.delete("/:id", postsController.deletePost);

router.put("/:id", postsController.putPost);

module.exports = router;
