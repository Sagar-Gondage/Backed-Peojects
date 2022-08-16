require("dotenv").config();

const connectDB = require("./db/connect");
const Product = require("./models/product.model");

const jsonProducts = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    //// we are using delete many just to make sure that before you enter any value database is clear.
    await Product.deleteMany();
    await Product.create(jsonProducts);
    //// we have added to exit to terminate the terminal once data is populated to database.
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
