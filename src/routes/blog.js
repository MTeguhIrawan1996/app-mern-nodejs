const express = require("express");
const { body } = require("express-validator");

const router = express.Router();
const blogController = require("../controllers/blog");

// Route URL created Post
router.post(
  "/post",
  [
    body("title").isLength({ min: 5 }).withMessage("Title tidak sesuai"),
    body("body").isLength({ min: 5 }).withMessage("body tidak sesuai"),
  ],
  blogController.CreatedBlogPost
);

// route URL GET ALL BLOG POST
router.get("/posts", blogController.getAllBlogPost);

// get post by id
router.get("/post/:postId", blogController.getBlogPostById);

// update
router.put(
  "/post/:postId",
  [
    body("title").isLength({ min: 5 }).withMessage("Title tidak sesuai"),
    body("body").isLength({ min: 5 }).withMessage("body tidak sesuai"),
  ],
  blogController.updateBlogPost
);

// Delete
router.delete("/post/:postId", blogController.deleteBlogPost);

module.exports = router;
