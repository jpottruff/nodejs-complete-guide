const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");

const app = express();

// RE app.set() https://expressjs.com/en/4x/api.html#app.settings.table
// RE: express / template engines https://expressjs.com/en/guide/using-template-engines.html
// NOTE: you must register handlebars as an engine in order to use it (see docs for which version you are using)
// https://www.npmjs.com/package/express-handlebars#usage
app.engine(
  "handlebars",
  expressHbs.engine({
    layoutsDir: "views/layouts/",
    defaultLayout: "main-layout",
  })
);
app.set("view engine", "handlebars");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { docTitle: "404 Not Found" });
});

app.listen(3000);
