let mongoose = require("mongoose");

let Parent_Categories = mongoose.Schema(
  {
    Categories: String,
  },
  { collection: "parent_categories" }
);

module.exports = mongoose.model("Parent_Categories", Parent_Categories);
