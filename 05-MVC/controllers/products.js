// *NOTE: this would be in server memory and is obviously not ideal
const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    productCSS: true,
    formsCSS: true,
    activeAddProduct: true,
    docTitle: "Add Product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  res.render("shop", {
    productCSS: true,
    docTitle: "Shop",
    activeShop: true,
    path: "/",
    prods: products,
    hasProducts: products.length > 0,
  });
};