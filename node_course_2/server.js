const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const routerPost = require("./routes/post-routes");
const routerContacts = require("./routes/contact-routes");
const createPath = require("./helpers/create-path");
const postApiRoutes = require("./routes/api-post-routes");

const PORT = 3000;

const app = express();
app.set("view engine", "ejs");

const start = async () => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://admin:qwe@cluster0.xkogr.mongodb.net/WebNodeTest?retryWrites=true&w=majority"
      )
      .then((res) => console.log("DB connected"))
      .catch((error) => console.log(error));
    app.listen(PORT, () => console.log(`Serves started on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();

app.use(express.static("styles"));

app.use(express.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

app.use(routerContacts);

app.use(routerPost);

app.use(postApiRoutes);

app.get("/", (req, res) => {
  const title = "Home";
  res.render(createPath("index"), { title });
});

app.use((req, res) => {
  const title = "Error 404";
  res.status(404).render(createPath("error"), { title });
});
