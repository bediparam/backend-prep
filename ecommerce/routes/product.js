const express = require("express");
const {
  getProducts,
  createProduct,
  editProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");
const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);

router.get("/edit/:id", editProduct);
router.post("/edit/:id", updateProduct);

router.post("/delete/:id", deleteProduct);

module.exports = router;
