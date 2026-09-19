const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
});

const Product = mongoose.model("products", productSchema);

module.exports = Product;
