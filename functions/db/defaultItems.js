const { Item } = require("./models");

// Original task items
const item1 = new Item({
  task: "Welcome to your todo list",
  completed: false,
});
const item2 = new Item({
  task: "Hit the + button to add a new item",
  completed: false,
});
const item3 = new Item({
  task: "Hit the delete button to delete an item",
  completed: false,
});
const item4 = new Item({
  task: "Tap the task name to go back to all your tasks",
  completed: false,
});
const item5 = new Item({
  task: "Tap the moon icon to switch between dark and light modes",
  completed: false,
});

const defaultItems = [item1, item2, item3, item4, item5];
module.exports = defaultItems;
