require("dotenv").config();

// asych errors

const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const productsRouter = require("./routes/products.routes");

// middleware imports
const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

// middlewares
app.use(express.json());

//// routes
app.get("/", (req, res) => {
  res.send("<h1>Store API</h1><a href='/api/v1/products'>Products Route</a>");
});

app.use("/api/v1/products", productsRouter);

// products route

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  // we are using asych await because we want database to connect first and then the UI

  try {
    await connectDB(process.env.MONGO_URI);
    console.log("connected to backend");
    app.listen(port, console.log(`server is lisening to port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
