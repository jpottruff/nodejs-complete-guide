// *NOTE: this would be in server memory and is obviously not ideal
// It will move to DB later on...
const products = [];

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    products.push(this);
  }

  // REMEMBER: `static` allows the method to be called on the class itself and not on an instantiated Object
  static fetchAll() {
    return products;
  }
};
