const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// https://github.com/expressjs/body-parser?tab=readme-ov-file#extended
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware for `/add-product` route
app.use("/add-product", (req, res, next) => {
  res.send(
    `<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>`
  );
});

// Middleware for `/product` route
app.use("/product", (req, res, next) => {
  console.log(req.body); // needs body-parser to work correctly
  res.redirect("/");
});

// Middleware for `/` route
app.use("/", (req, res, next) => {
  res.send("<h1>Hello from express</h1>");
});

app.listen(3000);
