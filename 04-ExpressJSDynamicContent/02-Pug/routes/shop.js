const path = require("path");

const express = require("express");

const adminData = require("./admin");
const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminData.products;
  console.log("from shop.js", products);
  res.render("shop");
});

module.exports = router;
