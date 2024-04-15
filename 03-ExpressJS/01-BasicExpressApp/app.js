const http = require("http");

const express = require("express");

const app = express();

// Middleware 1
app.use((req, res, next) => {
  console.log("In the middleware");
  next(); // allows the app to travel on to the next middleware
});

// Middleware 2
app.use((req, res, next) => {
  console.log("In the next middleware");
  res.send("<h1>Hello from express</h1>");
});

const server = http.createServer(app);
server.listen(3000);
