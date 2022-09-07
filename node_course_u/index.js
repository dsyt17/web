const Application = require("./server_framework/Application");
const userRouter = require("./src/user-router");
const jsonParser = require("./server_framework/parseJson");
const parsedUrl = require("./server_framework/parseUrl");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;

const app = new Application();
app.use(jsonParser);
app.use(parsedUrl("http://localhost:5000"));
app.addRouter(userRouter);

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:qwe@cluster0.xkogr.mongodb.net/Ulbi?retryWrites=true&w=majority"
    );
    app.listen(PORT, () => console.log(`Serves started on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
