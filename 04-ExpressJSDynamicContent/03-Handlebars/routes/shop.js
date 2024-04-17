const express = require("express");

const adminData = require("./admin");
const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", { docTitle: "Shop", path: "/", prods: products });
});

module.exports = router;
