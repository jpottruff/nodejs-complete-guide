const fs = require("fs");
const path = require("path");

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );
    fs.readFile(p, (err, data) => {
      let products = [];
      // no file content at first
      if (!err) {
        products = JSON.parse(data);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => console.log(err));
    });
  }

  // REMEMBER: `static` allows the method to be called on the class itself and not on an instantiated Object
  static fetchAll() {
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );
    // NOTE: this will break things elsewhere...
    fs.readFile(p, (err, data) => {
      if (err) {
        return [];
      }
      const products = JSON.parse(data);
      return products;
    });
  }
};
