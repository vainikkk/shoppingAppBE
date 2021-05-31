let mongoose = require("mongoose");

let Categories = mongoose.Schema(
  {
    title: String,
    image: Object,
    parentCategoryId: String,
  },
  { collection: "categories" }
);

module.exports = mongoose.model("Categories", Categories);
