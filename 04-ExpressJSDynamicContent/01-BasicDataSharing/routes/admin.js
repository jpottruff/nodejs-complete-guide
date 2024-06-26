const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const { title } = require("process");

const router = express.Router();

// *NOTE: this would be in server memory and is obviously not ideal
const products = [];

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
