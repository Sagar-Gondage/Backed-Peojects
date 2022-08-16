const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: [true, "product name must be provied"] },
  price: { type: Number, required: [true, "product price must be provied"] },
  featured: { type: Boolean, default: false },
  rating: { type: Number, default: 4.5 },
  created: { type: Date, default: Date.now() },
  //   company: { type: String, enum: ["ikea", "liddy", "caressa", "morcos"] },
  // if you want message if value enterd by the user for company is out of the list then
  company: {
    type: String,
    enum: {
      value: ["ikea", "liddy", "caressa", "marcos"],
      message: `{value} is not supported`,
    },
  },
});

module.exports = mongoose.model("Product", productSchema);
