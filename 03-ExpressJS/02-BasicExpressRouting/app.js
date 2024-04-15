const express = require("express");

const app = express();

// Middleware 1
app.use((req, res, next) => {
  console.log("This is read first and always runs ");
  next();
});

// NOTE: keep most generic routes toward the bottom
// Middleware for `/add-product` route
app.use("/add-product", (req, res, next) => {
  console.log("In the product middleware");
  res.send("<h1>Add Product</h1>");
});

// Middleware for `/` route
app.use("/", (req, res, next) => {
  res.send("<h1>Hello from express</h1>");
});

app.listen(3000);
