// @ts-nocheck
const _ = require("lodash");
const { List, Item } = require("./db/models");
const errorHandler = require("./utils/errorHandler");
const init = require("./utils/init");
const respond = require("./utils/respond");

exports.handler = async (event, context) => {
  init(event, "POST");
  const name = _.startCase(event.queryStringParameters.name);
  const { text } = JSON.parse(event.body);
  const item = new Item({
    task: text,
    completed: false,
  });
  try {
    const foundList = await List.findOne({ name });
    foundList.items.push(item);
    await foundList.save();
    return respond(201, { item });
  } catch (error) {
    errorHandler(error);
  }
};
