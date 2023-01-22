const express = require("express");
const blogController = require("../controllers/blogController");

const router = express.Router(); // initialize new router

// map URI to controller logic
router.get("/", blogController.getBlogs);
router.post("/create", blogController.createBlog);
router.get("/:id", blogController.getSingleBlog);
router.put("/:id", blogController.updateBlog);
router.delete("/:id", blogController.deleteBlog);

module.exports = router;
