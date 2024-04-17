const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// TODO - replace engine
// RE app.set() https://expressjs.com/en/4x/api.html#app.settings.table
// RE: express / template engines https://expressjs.com/en/guide/using-template-engines.html
// NOTE: pug auto registers itself with express - this will not apply to _all_ template engines
// app.set("view engine", "pug");
// app.set("views", "views");

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
