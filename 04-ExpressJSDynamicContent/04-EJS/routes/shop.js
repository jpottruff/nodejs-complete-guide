const express = require("express");

const adminData = require("./admin");
const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", {
    productCSS: true,
    docTitle: "Shop",
    activeShop: true,
    path: "/",
    prods: products,
    hasProducts: products.length > 0,
  });
});

module.exports = router;
