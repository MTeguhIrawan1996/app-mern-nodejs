const { validationResult } = require("express-validator");
const BlogPost = require("../models/blog");

exports.CreatedBlogPost = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = new Error("Invalid Input tidak sesuai");
    err.errorStatus = 400;
    err.data = errors.array();
    throw err;
  }

  if (!req.file) {
    const err = new Error("Image Harus diupload");
    err.errorStatus = 422;
    throw err;
  }

  const title = req.body.title;
  const image = req.file.path;
  const body = req.body.body;

  const Posting = new BlogPost({
    title: title,
    body: body,
    image: image,
    author: {
      uid: 1,
      name: "M Teguh Irawan",
    },
  });

  Posting.save()
    .then((result) => {
      res.status(201).json({
        message: "Created Blog Post Succes",
        data: result,
      });
    })
    .catch((err) => {
      console.log("err:", err);
    });
};
