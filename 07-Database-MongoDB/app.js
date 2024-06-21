const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
const mongoConnect = require("./util/database").mongoConnect;

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

// TODO
const adminRoutes = require("./routes/admin");
// const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  // TODO
  // User.findById(1)
  //   .then((user) => {
  //     req.user = user;
  //     next();
  //   })
  //   .catch((err) => console.log(err));
  next();
});

// TODO
app.use("/admin", adminRoutes);
// app.use(shopRoutes);

app.use(errorController.get404);

mongoConnect(() => {
  console.log("App listening...");
  app.listen(3000);
});
