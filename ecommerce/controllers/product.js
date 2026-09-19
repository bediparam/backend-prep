const Product = require("../models/product");

async function getProducts(req, res) {
  const products = await Product.find({});
  res.render("index.ejs", { products: products });
}

async function createProduct(req, res) {
  const { name, imageUrl, description, price } = req.body;
  const product = await Product.create({ name, imageUrl, description, price });
  res.redirect("/products");
}

module.exports = { getProducts, createProduct };
