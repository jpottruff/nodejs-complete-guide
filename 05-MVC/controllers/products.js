const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    productCSS: true,
    formsCSS: true,
    activeAddProduct: true,
    docTitle: "Add Product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll();

  res.render("shop", {
    productCSS: true,
    docTitle: "Shop",
    activeShop: true,
    path: "/",
    prods: products,
    hasProducts: products.length > 0,
  });
};
