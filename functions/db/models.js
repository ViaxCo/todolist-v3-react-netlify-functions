const mongoose = require("mongoose");

// Item schema
const itemSchema = new mongoose.Schema({
  task: String,
  completed: Boolean,
});
// List schema
const listSchema = new mongoose.Schema({
  name: String,
  items: [itemSchema],
});

module.exports = {
  Item: mongoose.model("Item", itemSchema),
  List: mongoose.model("List", listSchema),
};
