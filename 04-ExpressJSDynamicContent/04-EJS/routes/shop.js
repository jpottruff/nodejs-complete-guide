const path = require("path"); // TODO remove

const express = require("express");

const rootDir = require("../util/path"); // TODO remove
const adminData = require("./admin");
const router = express.Router();

router.get("/", (req, res, next) => {
  // TODO remove
  console.log("from shop.js", adminData.products);
  res.sendFile(path.join(rootDir, "views", "shop.html"));
  // TODO
  // const products = adminData.products;
  // res.render("shop", {
  //   productCSS: true,
  //   docTitle: "Shop",
  //   activeShop: true,
  //   path: "/",
  //   prods: products,
  //   hasProducts: products.length > 0,
  // });
});

module.exports = router;
