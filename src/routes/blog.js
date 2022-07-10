const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const blogController = require("../controllers/blog");

router.post(
  "/post",
  [
    body("title").isLength({ min: 5 }).withMessage("Title tidak sesuai"),
    body("body").isLength({ min: 5 }).withMessage("body tidak sesuai"),
  ],
  blogController.CreatedBlogPost
);

module.exports = router;
