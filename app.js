const express = require("express");
const app = express();
const postsRoutes = require("./api/posts/posts.routes");
const connectDb = require("./database");

connectDb();
app.use(express.json());
app.use("/posts", postsRoutes);

app.use((req, res, next) => {
  res.status(404).json({ msg: "Not Found 404!" });
});

app.use((err, req, res, next) => {
  res
    .status(500)
    .json(
      err.message ? { msg: err.message } : { msg: "Internal Server Error" }
    );
});

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
