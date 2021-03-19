// @ts-nocheck
const _ = require("lodash");
const { List } = require("./db/models");
const defaultItems = require("./db/defaultItems");
const errorHandler = require("./utils/errorHandler");
const init = require("./utils/init");
const respond = require("./utils/respond");

exports.handler = async (event, context) => {
  init(event, "GET");
  const name = _.startCase(event.queryStringParameters.name);
  try {
    const foundList = await List.findOne({ name });
    if (foundList) {
      return respond(200, { listTitle: foundList.name, items: foundList.items });
    } else {
      const newList = await List.create({
        name,
        items: defaultItems,
      });
      return respond(201, { listTitle: newList.name, items: newList.items });
    }
  } catch (error) {
    errorHandler(error);
  }
};
