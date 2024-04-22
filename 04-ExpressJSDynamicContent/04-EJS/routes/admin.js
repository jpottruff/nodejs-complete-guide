const express = require("express");

const router = express.Router();

// *NOTE: this would be in server memory and is obviously not ideal
const products = [];

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    productCSS: true,
    formsCSS: true,
    activeAddProduct: true,
    docTitle: "Add Product",
    path: "/admin/add-product",
  });
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
