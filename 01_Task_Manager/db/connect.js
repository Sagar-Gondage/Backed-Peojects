const mongoose = require("mongoose");

//// this will return promise
const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
  });
};

module.exports = connectDB;
