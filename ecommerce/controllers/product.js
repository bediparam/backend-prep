const Product = require("../models/Product");
const { getUser } = require("../services/auth");

async function getProducts(req, res) {
  const products = await Product.find({});
  res.render("index.ejs", { products: products, user: req.user });
}

async function createProduct(req, res) {
  const { name, imageUrl, description, price } = req.body;
  const product = await Product.create({
    name,
    imageUrl,
    description,
    price,
    createdBy: req.user._id,
  });
  res.redirect("/products");
}

async function updateProduct(req, res) {
  const product = await Product.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    updatedBy: req.user._id,
  });
  res.redirect("/products");
}

async function editProduct(req, res) {
  const products = await Product.find({});
  const product = await Product.findById(req.params.id);
  res.render("editProduct.ejs", { products: products, product: product });
}

async function deleteProduct(req, res) {
  const product = await Product.findByIdAndDelete(req.params.id);
  res.redirect("/products");
}

module.exports = {
  getProducts,
  createProduct,
  editProduct,
  updateProduct,
  deleteProduct,
};
