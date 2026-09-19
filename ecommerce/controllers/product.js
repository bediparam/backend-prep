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

async function updateProduct(req, res) {
  const product = await Product.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
  });
  res.redirect("/products");
}

async function editProduct(req, res) {
  const products = await Product.find({});
  const product = await Product.findById(req.params.id);
  res.render("editProduct.ejs", { products: products, product: product });
}

async function deleteProduct(req, res) {}

module.exports = {
  getProducts,
  createProduct,
  editProduct,
  updateProduct,
  deleteProduct,
};
