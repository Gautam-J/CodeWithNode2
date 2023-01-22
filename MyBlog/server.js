const express = require("express");
const blogController = require("./controllers/blogController");

const app = express(); // creating an instance of the app
const PORT = process.env.PORT || 8000; // either default PORT or specified PORT

// custom middleware for logging requests
const logger = (req, res, next) => {
  console.log(Date(), req.method, req.url);
  next();
};

// initialize middleware
app.use(logger);
app.use(express.json());

// set view engine to render dynamic html using ejs
app.set("view engine", "ejs");

// testing endpoint
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// endpoints for blog CRUD operation
app.use("/api/blog", require("./routes/blog"));

// endpoint for rendering blogs
app.get("/render", blogController.renderBlogs);

// start the app and listen for incoming requests on specified PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
