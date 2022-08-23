const express = require("express");
const app = express();
const tasks = require("./routes/tasks.routes");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
// middleware here

app.use(express.static("./public"));
app.use(express.json());
// routes

app.use("/api/v1/tasks", tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 4000;

const start = async () => {
  // we are using asych await because we want database to connect first and then the UI
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening to port ${port}...`));
  } catch (err) {
    console.log(err);
  }
};

start();
