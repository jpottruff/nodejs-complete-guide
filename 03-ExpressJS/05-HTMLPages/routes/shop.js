const path = require("path");
const rootDir = require("../util/path");
const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  // *NOTE: __dirname is a variable made available by node that exposes the absolute path to the current file
  // res.sendFile(path.join(__dirname, "..", "views", "shop.html"));

  // rootDir avoids needing to traverse up
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
