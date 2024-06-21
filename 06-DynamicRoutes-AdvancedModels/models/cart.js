const fs = require("fs");
const path = require("path");

const p = path.join(
  // path.dirname(process.mainModule.filename),
  path.dirname(require.main.filename),
  "data",
  "cart.json"
);

module.exports = class Cart {
  static addProduct(id, productPrice) {
    // Fetch previous cart
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      // If there's no error reading the file the cart exists
      if (!err) {
        cart = JSON.parse(fileContent);
      }

      // Find existing product
      const existingProductIndex = cart.products.findIndex((p) => p.id === id);
      const existingProduct = cart.products[existingProductIndex];
      let updatedProduct;

      // Add new product/ increase quantity
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty + 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      cart.totalPrice = cart.totalPrice + +productPrice;
      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }

  static deleteProduct(id, productPrice) {
    // Fetch previous cart
    fs.readFile(p, (err, fileContents) => {
      if (err) {
        return;
      }

      const updatedCart = { ...JSON.parse(fileContents) };
      const product = updatedCart.products.find((p) => p.id === id);
      const productQty = product.qty;
      updatedCart.products = updatedCart.products.filter((p) => p.id !== id);
      updatedCart.totalPrice =
        updatedCart.totalPrice - productPrice * productQty;

      fs.writeFile(p, JSON.stringify(updatedCart), (err) => {
        console.log(err);
      });
    });
  }
};
