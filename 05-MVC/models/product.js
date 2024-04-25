const fs = require("fs");
const path = require("path");

const PRODUCTS_DB = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);

const getProductsFromFile = (cb) => {
  fs.readFile(PRODUCTS_DB, (err, data) => {
    if (err) {
      return cb([]);
    }
    cb(JSON.parse(data));
  });
};
module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(PRODUCTS_DB, JSON.stringify(products), (err) =>
        console.log(err)
      );
    });
  }

  // REMEMBER: `static` allows the method to be called on the class itself and not on an instantiated Object
  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
