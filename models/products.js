let mongoose = require("mongoose");

let Products = mongoose.Schema(
  {
    title: String,
    categoryId: String,
    categoryName: String,
    image: Object,
  },
  { collection: "products" }
);

module.exports = mongoose.model("Products", Products);
