const {
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
} = require("firebase/firestore");
const db = require("../config/db");

// CREATE a new blog post
const createBlog = async (req, res) => {
  try {
    const { title, author, text } = req.body;
    const colRef = collection(db, "blogs");
    await addDoc(colRef, {
      title,
      author,
      text,
    });
    res.send("New blog created");
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};

// READ all blogs from the database
const getBlogs = async (req, res) => {
  try {
    const colRef = collection(db, "blogs");
    const blogs = await getDocs(colRef);
    const blogList = blogs.docs.map((blog) => blog.data());
    res.send(blogList);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};

// READ a single blog from the database
const getSingleBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const docRef = doc(db, `blogs/${id}`);
    const blog = await getDoc(docRef);
    const data = blog.data();
    res.send(data);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};

// UPDATE a single blog that is already in the database
const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const docRef = doc(db, `blogs/${id}`);
    const { text } = req.body;
    await updateDoc(docRef, { text });
    res.send("Blog updated");
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};

// DELETE a single blog from the database
const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const docRef = doc(db, `blogs/${id}`);
    await deleteDoc(docRef);
    res.send("Blog deleted");
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};

// RENDER all blogs to a html file
const renderBlogs = async (req, res) => {
  try {
    const colRef = collection(db, "blogs");
    const blogs = await getDocs(colRef);
    const blogList = blogs.docs.map((blog) => blog.data());
    res.render("blogs", { blogList: blogList });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};

// export aobve defined functions to use them in other files
module.exports = {
  createBlog,
  getBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
  renderBlogs,
};
