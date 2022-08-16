const mongoose = require("mongoose");

const connectDB = (url) => {
  //// this function will return a promise
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
