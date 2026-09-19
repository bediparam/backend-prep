const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
});

const Product = mongoose.model("products", productSchema);

module.exports = Product;
